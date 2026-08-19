import { v } from 'convex/values';
import { api } from './_generated/api';
import { action, httpAction, mutation, query } from './_generated/server';

// Criar registro de pagamento (quando sessão Mercado Pago é criada)
export const create = mutation({
  args: {
    mercadoPagoId: v.string(),
    planId: v.string(),
    amount: v.number(),
    currency: v.string(),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert('payments', {
      ...args,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Atualizar pagamento (quando webhook do Mercado Pago confirma)
export const updateStatus = mutation({
  args: {
    mercadoPagoId: v.string(),
    status: v.union(
      v.literal('pending'),
      v.literal('completed'),
      v.literal('failed'),
      v.literal('refunded'),
    ),
    clientId: v.optional(v.id('clients')),
  },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query('payments')
      .withIndex('by_mercado_pago_id', q =>
        q.eq('mercadoPagoId', args.mercadoPagoId))
      .first();

    if (!payment) {
      throw new Error('Pagamento não encontrado');
    }

    await ctx.db.patch(payment._id, {
      status: args.status,
      clientId: args.clientId,
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

// Buscar pagamentos
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('payments').collect();
  },
});

// Buscar pagamentos por status
export const listByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('payments')
      .withIndex('by_status', q => q.eq('status', args.status as any))
      .collect();
  },
});

// Buscar pagamento por ID do Mercado Pago
export const getByMercadoPagoId = query({
  args: { mercadoPagoId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('payments')
      .withIndex('by_mercado_pago_id', q =>
        q.eq('mercadoPagoId', args.mercadoPagoId))
      .first();
  },
});

// Buscar pagamentos de um cliente
export const listByClient = query({
  args: { clientId: v.id('clients') },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('payments')
      .withIndex('by_client', q => q.eq('clientId', args.clientId))
      .collect();
  },
});

// Criar preferência de pagamento no Mercado Pago (via Action)
export const createPreference = action({
  args: {
    planId: v.string(),
    planName: v.string(),
    price: v.number(),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const { default: MercadoPagoConfig, Preference } = await import('mercadopago');

    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: args.planId,
            title: args.planName,
            quantity: 1,
            unit_price: args.price,
            currency_id: 'BRL',
          },
        ],
        metadata: {
          planId: args.planId,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/sucesso`,
          failure: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/falha`,
          pending: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/pendente`,
        },
        auto_return: 'approved',
        notification_url: `${process.env.NEXT_PUBLIC_CONVEX_URL?.replace('.cloud', '.site')}/api/mercadopago-webhook`,
      },
    });

    return {
      id: result.id,
      init_point: result.init_point,
    };
  },
});

// Webhook do Mercado Pago
export const mercadoPagoWebhook = httpAction(async (ctx, request) => {
  const body = await request.json();

  if (body.type === 'payment') {
    const paymentId = body.data?.id;

    if (paymentId) {
      // Buscar detalhes do pagamento
      const { default: MercadoPagoConfig, Payment } = await import('mercadopago');

      const client = new MercadoPagoConfig({
        accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
      });

      const payment = new Payment(client);
      const paymentDetails = await payment.get({ id: paymentId });

      if (paymentDetails.status === 'approved') {
        // Atualizar pagamento no banco
        await ctx.runMutation(api.payments.updateStatus, {
          mercadoPagoId: paymentId,
          status: 'completed',
        });
      }
    }
  }

  return new Response('OK', { status: 200 });
});

import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

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

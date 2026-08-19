'use node';

import { v } from 'convex/values';
import { action } from './_generated/server';

// Criar preferência de pagamento no Mercado Pago (via Action com Node.js)
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

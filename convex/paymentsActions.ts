'use node';

import { v } from 'convex/values';
import { action } from './_generated/server';

// Criar preferência de pagamento no Mercado Pago (via Action com Node.js)
export const createPreference = action({
  args: {
    planId: v.string(),
    planName: v.string(),
    price: v.number(),
    description: v.optional(v.string()),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error('MERCADO_PAGO_ACCESS_TOKEN não configurado');
    }

    const { default: MercadoPagoConfig, Preference } = await import('mercadopago');

    const client = new MercadoPagoConfig({
      accessToken,
    });

    const preference = new Preference(client);

    // URL base do site
    const appUrl = process.env.NEXT_PUBLIC_APP_URL
      || 'http://localhost:3000';

    const result = await preference.create({
      body: {
        items: [
          {
            id: args.planId,
            title: args.planName,
            description: args.description || `Implementação do ${args.planName} - Pagamento único`,
            quantity: 1,
            unit_price: args.price,
            currency_id: 'BRL',
          },
        ],
        metadata: {
          planId: args.planId,
          type: 'implementation', // Identifica como pagamento de implementação
        },
        back_urls: {
          success: `${appUrl}/sucesso`,
          failure: `${appUrl}/falha`,
          pending: `${appUrl}/pendente`,
        },
        auto_return: 'approved',
        // Webhook do Convex para confirmar pagamento
        notification_url: `${process.env.NEXT_PUBLIC_CONVEX_URL?.replace('.cloud', '.site')}/api/mercadopago-webhook`,
      },
    });

    return {
      id: result.id,
      init_point: result.init_point,
    };
  },
});

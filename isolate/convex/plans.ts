import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Buscar todos os planos ativos
export const listActive = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('plans')
      .filter(q => q.eq(q.field('isActive'), true))
      .collect();
  },
});

// Buscar plano por ID
export const getByPlanId = query({
  args: { planId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('plans')
      .withIndex('by_planId', q => q.eq('planId', args.planId))
      .first();
  },
});

// Criar ou atualizar plano (usado para configuração inicial)
export const upsert = mutation({
  args: {
    planId: v.string(),
    name: v.string(),
    price: v.number(),
    features: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('plans')
      .withIndex('by_planId', q => q.eq('planId', args.planId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        isActive: true,
      });
      return existing._id;
    }

    return await ctx.db.insert('plans', {
      ...args,
      isActive: true,
    });
  },
});

// Desativar plano
export const deactivate = mutation({
  args: { planId: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('plans')
      .withIndex('by_planId', q => q.eq('planId', args.planId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { isActive: false });
    }
  },
});

// Inicializar planos padrão do AtendIA
export const initializePlans = mutation({
  args: {},
  handler: async (ctx) => {
    const plans = [
      {
        planId: 'pequeno',
        name: 'Plano Pequeno',
        price: 97, // R$ 97,00
        features: [
          'Atendente Virtual no WhatsApp',
          'Agendamento simples',
          '1 usuário administrador',
          'Relatórios básicos',
          'Suporte por email',
        ],
      },
      {
        planId: 'medio',
        name: 'Plano Médio',
        price: 197, // R$ 197,00
        features: [
          'Atendente Virtual no WhatsApp',
          'Agendamento avançado',
          '3 usuários administradores',
          'Relatórios completos',
          'Suporte prioritário',
          'Lembretes automáticos',
          'Integração com Google Calendar',
        ],
      },
      {
        planId: 'grande',
        name: 'Plano Grande',
        price: 397, // R$ 397,00
        features: [
          'Atendente Virtual no WhatsApp',
          'Agendamento ilimitado',
          'Usuários ilimitados',
          'Relatórios avançados com IA',
          'Suporte 24/7',
          'Lembretes automáticos',
          'Integração com Google Calendar',
          'Multi-unidades',
          'API personalizada',
          'Treinamento dedicado',
        ],
      },
    ];

    for (const plan of plans) {
      const existing = await ctx.db
        .query('plans')
        .withIndex('by_planId', q => q.eq('planId', plan.planId))
        .first();

      if (existing) {
        await ctx.db.patch(existing._id, {
          ...plan,
          isActive: true,
        });
      } else {
        await ctx.db.insert('plans', {
          ...plan,
          isActive: true,
        });
      }
    }

    return { success: true };
  },
});

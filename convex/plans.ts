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
        planId: 'essencial',
        name: 'Plano Essencial',
        price: 100, // R$ 100,00/mês
        features: [
          'Sistema de agendamento online',
          'Página profissional',
          'Cadastro de serviços',
          'Configuração de horários',
          'Cadastro de clientes',
          'Painel administrativo básico',
          'Personalização visual básica',
          'Suporte básico',
        ],
      },
      {
        planId: 'profissional',
        name: 'Plano Profissional',
        price: 150, // R$ 150,00/mês
        features: [
          'Tudo do Essencial',
          'CRM completo de clientes',
          'Histórico de atendimentos',
          'Automações e lembretes',
          'Confirmações automáticas',
          'Personalização visual avançada',
          'Relatórios básicos',
          'Suporte prioritário',
        ],
      },
      {
        planId: 'premium',
        name: 'Plano Premium',
        price: 200, // R$ 200,00/mês
        features: [
          'Tudo do Profissional',
          'Assistente de IA configurado para o negócio',
          'IA baseada nas informações do negócio',
          'Automação de comunicação',
          'Recursos avançados de retenção',
          'Relatórios e indicadores',
          'Painel administrativo avançado',
          'Suporte prioritário e manutenção',
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

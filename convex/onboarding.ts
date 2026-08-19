import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Adicionar serviço ao negócio
export const addService = mutation({
  args: {
    clientId: v.id('clients'),
    name: v.string(),
    description: v.optional(v.string()),
    price: v.number(), // Em centavos
    duration: v.number(), // Em minutos
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('services', {
      ...args,
      isActive: true,
    });
  },
});

// Buscar serviços do negócio
export const listServices = query({
  args: { clientId: v.id('clients') },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('services')
      .withIndex('by_client', q => q.eq('clientId', args.clientId))
      .collect();
  },
});

// Atualizar serviço
export const updateService = mutation({
  args: {
    id: v.id('services'),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    duration: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

// Deletar serviço
export const removeService = mutation({
  args: { id: v.id('services') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Adicionar horário de funcionamento
export const addBusinessHour = mutation({
  args: {
    clientId: v.id('clients'),
    dayOfWeek: v.number(), // 0-6
    openTime: v.string(),
    closeTime: v.string(),
    isOpen: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('businessHours', args);
  },
});

// Buscar horários do negócio
export const listBusinessHours = query({
  args: { clientId: v.id('clients') },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('businessHours')
      .withIndex('by_client', q => q.eq('clientId', args.clientId))
      .collect();
  },
});

// Atualizar horário
export const updateBusinessHour = mutation({
  args: {
    id: v.id('businessHours'),
    openTime: v.optional(v.string()),
    closeTime: v.optional(v.string()),
    isOpen: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

// Deletar horário
export const removeBusinessHour = mutation({
  args: { id: v.id('businessHours') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Completar onboarding (atualizar status do cliente)
export const completeOnboarding = mutation({
  args: {
    clientId: v.id('clients'),
    services: v.array(
      v.object({
        name: v.string(),
        description: v.optional(v.string()),
        price: v.number(),
        duration: v.number(),
      }),
    ),
    businessHours: v.array(
      v.object({
        dayOfWeek: v.number(),
        openTime: v.string(),
        closeTime: v.string(),
        isOpen: v.boolean(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    // Adicionar serviços
    for (const service of args.services) {
      await ctx.db.insert('services', {
        clientId: args.clientId,
        ...service,
        isActive: true,
      });
    }

    // Adicionar horários
    for (const hour of args.businessHours) {
      await ctx.db.insert('businessHours', {
        clientId: args.clientId,
        ...hour,
      });
    }

    // Atualizar status do cliente
    await ctx.db.patch(args.clientId, {
      status: 'em_desenvolvimento',
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

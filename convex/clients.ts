import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Buscar todos os clientes
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('clients').collect();
  },
});

// Buscar clientes por status
export const listByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('clients')
      .withIndex('by_status', q => q.eq('status', args.status as any))
      .collect();
  },
});

// Buscar cliente por ID
export const get = query({
  args: { id: v.id('clients') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Criar novo cliente (após onboarding)
export const create = mutation({
  args: {
    businessName: v.string(),
    ownerName: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    businessType: v.string(),
    address: v.optional(v.string()),
    planId: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert('clients', {
      ...args,
      status: 'aguardando_formulario',
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Atualizar status do cliente
export const updateStatus = mutation({
  args: {
    id: v.id('clients'),
    status: v.union(
      v.literal('aguardando_formulario'),
      v.literal('em_desenvolvimento'),
      v.literal('entregue'),
      v.literal('em_teste_30_dias'),
      v.literal('ativo'),
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      updatedAt: Date.now(),
    });
  },
});

// Atualizar dados do cliente
export const update = mutation({
  args: {
    id: v.id('clients'),
    businessName: v.optional(v.string()),
    ownerName: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    businessType: v.optional(v.string()),
    address: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now(),
    });
  },
});

// Deletar cliente
export const remove = mutation({
  args: { id: v.id('clients') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

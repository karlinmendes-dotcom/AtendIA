import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Buscar configuração por chave
export const get = query({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    const setting = await ctx.db
      .query('settings')
      .withIndex('by_key', q => q.eq('key', args.key))
      .first();
    return setting?.value;
  },
});

// Buscar todas as configurações
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('settings').collect();
  },
});

// Definir configuração
export const set = mutation({
  args: {
    key: v.string(),
    value: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('settings')
      .withIndex('by_key', q => q.eq('key', args.key))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { value: args.value });
    } else {
      await ctx.db.insert('settings', args);
    }
  },
});

// Deletar configuração
export const remove = mutation({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('settings')
      .withIndex('by_key', q => q.eq('key', args.key))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
    }
  },
});

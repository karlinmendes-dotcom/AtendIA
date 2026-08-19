import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Busca as notificações mais recentes
export const getLatest = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('notifications')
      .withIndex('by_created')
      .order('desc')
      .take(10);
  },
});

// Busca apenas não lidas
export const getUnread = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('notifications')
      .withIndex('by_created')
      .order('desc')
      .filter(q => q.neq(q.field('read'), true))
      .take(5);
  },
});

// Conta notificações não lidas
export const unreadCount = query({
  args: {},
  handler: async (ctx) => {
    const unread = await ctx.db
      .query('notifications')
      .filter(q => q.neq(q.field('read'), true))
      .collect();
    return unread.length;
  },
});

// Registra nova notificação
export const create = mutation({
  args: {
    title: v.string(),
    message: v.string(),
    type: v.union(
      v.literal('success'),
      v.literal('error'),
      v.literal('info'),
    ),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert('notifications', {
      title: args.title,
      message: args.message,
      type: args.type,
      read: false,
      createdAt: Date.now(),
    });
    return id;
  },
});

// Marca como lida
export const markAsRead = mutation({
  args: { id: v.id('notifications') },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { read: true });
  },
});

// Marca todas como lidas
export const markAllAsRead = mutation({
  args: {},
  handler: async (ctx) => {
    const unread = await ctx.db
      .query('notifications')
      .filter(q => q.neq(q.field('read'), true))
      .collect();
    for (const n of unread) {
      await ctx.db.patch(n._id, { read: true });
    }
  },
});

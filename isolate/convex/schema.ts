import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Tabela de clientes (negócios que contrataram o serviço)
  clients: defineTable({
    businessName: v.string(), // Nome do negócio
    ownerName: v.string(), // Nome do proprietário
    phone: v.string(), // Número do WhatsApp
    email: v.optional(v.string()), // Email (opcional)
    businessType: v.string(), // Tipo: salão, barbearia, clínica, lava-jato, etc.
    address: v.optional(v.string()), // Endereço do negócio
    status: v.union(
      v.literal('aguardando_formulario'),
      v.literal('em_desenvolvimento'),
      v.literal('entregue'),
      v.literal('em_teste_30_dias'),
      v.literal('ativo'),
    ),
    planId: v.string(), // ID do plano contratado (pequeno/medio/grande)
    convexDeploymentUrl: v.optional(v.string()), // URL do deployment Convex do cliente
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_status', ['status'])
    .index('by_plan', ['planId'])
    .index('by_phone', ['phone']),

  // Tabela de horários de funcionamento do negócio
  businessHours: defineTable({
    clientId: v.id('clients'),
    dayOfWeek: v.number(), // 0-6 (domingo-sábado)
    openTime: v.string(), // "09:00"
    closeTime: v.string(), // "18:00"
    isOpen: v.boolean(),
  }).index('by_client', ['clientId']),

  // Tabela de serviços oferecidos pelo negócio
  services: defineTable({
    clientId: v.id('clients'),
    name: v.string(), // Nome do serviço
    description: v.optional(v.string()),
    price: v.number(), // Preço em centavos
    duration: v.number(), // Duração em minutos
    isActive: v.boolean(),
  }).index('by_client', ['clientId']),

  // Tabela de pagamentos/checkout do Mercado Pago
  payments: defineTable({
    clientId: v.optional(v.id('clients')), // Pode ser null antes do onboarding
    mercadoPagoId: v.string(), // ID do pagamento no Mercado Pago
    planId: v.string(), // Plano adquirido
    amount: v.number(), // Valor em reais
    currency: v.string(), // "BRL"
    status: v.union(
      v.literal('pending'),
      v.literal('completed'),
      v.literal('failed'),
      v.literal('refunded'),
    ),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_mercado_pago_id', ['mercadoPagoId'])
    .index('by_client', ['clientId'])
    .index('by_status', ['status']),

  // Tabela de configuração dos planos (para facilitar atualizações)
  plans: defineTable({
    planId: v.string(), // "pequeno", "medio", "grande"
    name: v.string(), // Nome legível
    price: v.number(), // Preço em reais
    features: v.array(v.string()), // Lista de features incluídas
    isActive: v.boolean(),
  }).index('by_planId', ['planId']),

  // Tabela de configurações gerais do sistema
  settings: defineTable({
    key: v.string(),
    value: v.string(),
  }).index('by_key', ['key']),
});

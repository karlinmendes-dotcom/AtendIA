import type { PricingPlan } from '@/types/Subscription';

/** Pricing plans */
export const PLAN_NAME = {
  PEQUENO: 'pequeno',
  MEDIO: 'medio',
  GRANDE: 'grande',
} as const;

/** Lista de planos AtendIA */
export const AllPlans: PricingPlan[] = [
  {
    name: PLAN_NAME.PEQUENO,
    price: 97,
    limits: {
      teamMember: 1,
      website: 1,
      storage: 1,
      transfer: 1,
    },
  },
  {
    name: PLAN_NAME.MEDIO,
    price: 197,
    limits: {
      teamMember: 3,
      website: 1,
      storage: 3,
      transfer: 3,
    },
  },
  {
    name: PLAN_NAME.GRANDE,
    price: 397,
    limits: {
      teamMember: 10,
      website: 5,
      storage: 10,
      transfer: 10,
    },
  },
];

import type { PricingPlan } from '@/types/Subscription';

export const PLAN_NAME = {
  ESSENCIAL: 'essencial',
  PROFISSIONAL: 'profissional',
  PREMIUM: 'premium',
} as const;

export const AllPlans: PricingPlan[] = [
  {
    name: PLAN_NAME.ESSENCIAL,
    price: 97,
    implementationPrice: 447,
    limits: {
      teamMember: 1,
      website: 1,
      storage: 1,
      transfer: 1,
    },
  },
  {
    name: PLAN_NAME.PROFISSIONAL,
    price: 147,
    implementationPrice: 747,
    popular: true,
    limits: {
      teamMember: 3,
      website: 1,
      storage: 3,
      transfer: 3,
    },
  },
  {
    name: PLAN_NAME.PREMIUM,
    price: 197,
    implementationPrice: 997,
    limits: {
      teamMember: 10,
      website: 5,
      storage: 10,
      transfer: 10,
    },
  },
];

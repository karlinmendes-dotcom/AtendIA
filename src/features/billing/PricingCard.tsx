'use client';

import type { PricingPlan } from '@/types/Subscription';
import { useTranslations } from 'next-intl';
import { Shield, Clock } from 'lucide-react';
import { PricingFeatureList } from './PricingFeatureList';

const tierLabels: Record<string, string> = {
  essencial: 'Essencial',
  profissional: 'Mais Escolhido',
  premium: 'Premium',
};

const tierColors: Record<string, string> = {
  essencial: 'bg-muted text-muted-foreground',
  profissional: 'bg-primary text-primary-foreground',
  premium: 'bg-linear-to-r from-primary to-blue-600 text-white',
};

export const PricingCard = (props: {
  plan: PricingPlan;
  button: React.ReactNode;
}) => {
  const tPlans = useTranslations('PricingPlans');

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl border px-6 py-8 text-left
        transition-all duration-300
        ${props.plan.popular
          ? 'border-2 border-primary shadow-xl shadow-primary/10 bg-card scale-[1.03]'
          : 'border-border bg-card hover:shadow-lg'
        }
      `}
    >
      {/* Badge */}
      <div className="mb-4">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${tierColors[props.plan.name] || 'bg-muted text-muted-foreground'}`}>
          {tierLabels[props.plan.name] || props.plan.name}
        </span>
        {props.plan.popular && (
          <span className="ml-2 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-600">
            75% OFF Implementação
          </span>
        )}
      </div>

      {/* Plan name */}
      <div className="text-lg font-bold">
        {tPlans(`${props.plan.name}_plan_name`)}
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        {tPlans(`${props.plan.name}_plan_description`)}
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">R$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {props.plan.price}
          </span>
          <span className="text-sm text-muted-foreground">/mês</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Implementação: <span className="font-bold text-foreground">R$ {props.plan.implementationPrice}</span> (pagamento único)
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6">{props.button}</div>

      {/* Guarantee badges */}
      <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <Shield className="size-3 text-green-500" />
          {props.plan.popular ? '30 Dias de Garantia' : '7 Dias de Garantia'}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-3 text-blue-500" />
          Pagamento Seguro
        </div>
      </div>

      {/* Feature list */}
      <ul className="mt-6 flex-1 space-y-2.5 text-left">
        <PricingFeatureList planName={props.plan.name} />
      </ul>
    </div>
  );
};

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
  essencial: 'bg-white/10 text-gray-400',
  profissional: 'bg-[#2dd4bf] text-black',
  premium: 'bg-[#2dd4bf] text-black',
};

export const PricingCard = (props: {
  plan: PricingPlan;
  button: React.ReactNode;
}) => {
  const tPlans = useTranslations('PricingPlans');

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl border px-6 py-8 text-left transition-all duration-300
        ${props.plan.popular
          ? 'border-[#2dd4bf]/30 bg-[#0a0a0a] shadow-xl shadow-[#2dd4bf]/10 scale-[1.03]'
          : 'border-white/10 bg-[#0a0a0a] hover:border-white/20'
        }
      `}
    >
      {/* Badge */}
      <div className="mb-4">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${tierColors[props.plan.name] || 'bg-white/10 text-gray-400'}`}>
          {tierLabels[props.plan.name] || props.plan.name}
        </span>
        {props.plan.popular && (
          <span className="ml-2 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-400">
            75% OFF Implementação
          </span>
        )}
      </div>

      {/* Plan name */}
      <div className="text-lg font-bold text-white">
        {tPlans(`${props.plan.name}_plan_name`)}
      </div>

      <div className="mt-1 text-sm text-gray-500">
        {tPlans(`${props.plan.name}_plan_description`)}
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-gray-500">R$</span>
          <span className="text-5xl font-extrabold tracking-tight text-white">
            {props.plan.price}
          </span>
          <span className="text-sm text-gray-500">/mês</span>
        </div>
        <div className="mt-1 text-xs text-gray-500">
          Implementação: <span className="font-bold text-white">R$ {props.plan.implementationPrice}</span> (pagamento único)
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6">{props.button}</div>

      {/* Guarantee badges */}
      <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-gray-500">
        <div className="flex items-center gap-1">
          <Shield className="size-3 text-[#2dd4bf]" />
          {props.plan.popular ? '30 Dias de Garantia' : '7 Dias de Garantia'}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-3 text-[#2dd4bf]" />
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

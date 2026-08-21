'use client';

import { useState } from 'react';
import { PricingCard } from '@/features/billing/PricingCard';
import { Section } from '@/features/landing/Section';
import { useMercadoPago } from '@/hooks/useMercadoPago';
import { AllPlans } from '@/utils/PricingPlans';
import { Loader2 } from 'lucide-react';

export const Pricing = () => {
  const { checkout, isLoading } = useMercadoPago();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planName: string, implementationPrice: number, monthlyPrice: number) => {
    setLoadingPlan(planName);
    const planNames: Record<string, string> = {
      essencial: 'Implementação Plano Essencial AtendIA',
      profissional: 'Implementação Plano Profissional AtendIA',
      premium: 'Implementação Plano Premium AtendIA',
    };

    try {
      await checkout({
        planId: planName,
        planName: planNames[planName] || planName,
        price: implementationPrice,
        description: `Implementação do Plano ${planName.charAt(0).toUpperCase() + planName.slice(1)} - Pagamento único de R$ ${implementationPrice} + Mensalidade de R$ ${monthlyPrice}/mês`,
      });
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <Section
      className="bg-black text-white"
    >
      <div className="mb-6 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#2dd4bf]">CONHEÇA NOSSOS PLANOS</p>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Garanta acesso{' '}
          <span className="bg-linear-to-r from-[#2dd4bf] to-cyan-300 bg-clip-text text-transparent">
            ilimitado
          </span>
          <br className="hidden sm:block" /> a modelos premium
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400 sm:text-base">
          Escolha a solução ideal para transformar seu atendimento em uma
          experiência mais profissional, organizada e inteligente.
        </p>
      </div>

      {/* 3 cards - horizontal scroll on mobile, grid on desktop */}
      <div className="mx-auto max-w-6xl">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mx-auto sm:max-w-none sm:overflow-visible sm:pb-0 lg:gap-6">
          {AllPlans.map(plan => (
            <div
              key={plan.name}
              className="w-[85vw] shrink-0 snap-center sm:w-auto sm:flex-1"
            >
              <PricingCard
                plan={plan}
                button={
                  <button
                    className={`
                      w-full rounded-full py-3 px-5 text-sm font-bold transition-all duration-200
                      ${isLoading && loadingPlan === plan.name
                        ? 'cursor-wait opacity-80'
                        : 'hover:scale-[1.02] active:scale-[0.98]'
                      }
                      ${plan.popular
                        ? 'bg-[#2dd4bf] text-black shadow-lg shadow-[#2dd4bf]/25 hover:shadow-xl hover:shadow-[#2dd4bf]/30'
                        : 'border border-white/20 bg-transparent text-white hover:bg-white/10'
                      }
                    `}
                    onClick={() => handleCheckout(plan.name, plan.implementationPrice, plan.price)}
                    disabled={isLoading}
                  >
                    {isLoading && loadingPlan === plan.name
                      ? (
                          <span className="inline-flex items-center gap-2">
                            <Loader2 className="size-4 animate-spin" />
                            Redirecionando...
                          </span>
                        )
                      : `Contratar — R$ ${plan.implementationPrice}`
                    }
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 sm:text-sm">
        <p>
          Pagamento via Mercado Pago • Implementação é pagamento único •
          Mensalidade recorrente • Garantia incondicional de 30 dias
        </p>
      </div>
    </Section>
  );
};

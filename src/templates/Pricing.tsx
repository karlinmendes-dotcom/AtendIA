'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PricingCard } from '@/features/billing/PricingCard';
import { Section } from '@/features/landing/Section';
import { useMercadoPago } from '@/hooks/useMercadoPago';
import { AllPlans } from '@/utils/PricingPlans';
import { Loader2 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Pricing = () => {
  const t = useTranslations('Pricing');
  const { checkout, isLoading } = useMercadoPago();

  const handleCheckout = async (planName: string, implementationPrice: number, monthlyPrice: number) => {
    const planNames: Record<string, string> = {
      essencial: 'Implementação Plano Essencial AtendIA',
      profissional: 'Implementação Plano Profissional AtendIA',
      premium: 'Implementação Plano Premium AtendIA',
    };

    await checkout({
      planId: planName,
      planName: planNames[planName] || planName,
      price: implementationPrice,
      description: `Implementação do Plano ${planName.charAt(0).toUpperCase() + planName.slice(1)} - Pagamento único de R$ ${implementationPrice} + Mensalidade de R$ ${monthlyPrice}/mês`,
    });
  };

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
      className="bg-black text-white"
    >
      <div className="mb-8 text-center">
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Escolha a solução ideal para transformar seu atendimento em uma
          experiência mais profissional, organizada e inteligente.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {AllPlans.map(plan => (
          <motion.div key={plan.name} variants={item}>
            <PricingCard
              plan={plan}
              button={
                <button
                  className={`
                    w-full rounded-full py-3.5 px-6 text-sm font-bold transition-all
                    ${isLoading
                      ? 'cursor-wait opacity-80'
                      : 'hover:scale-[1.02]'
                    }
                    ${plan.popular
                      ? 'bg-[#2dd4bf] text-black shadow-lg shadow-[#2dd4bf]/25 hover:shadow-xl hover:shadow-[#2dd4bf]/30'
                      : 'border border-white/20 bg-transparent text-white hover:bg-white/10'
                    }
                  `}
                  onClick={() => handleCheckout(plan.name, plan.implementationPrice, plan.price)}
                  disabled={isLoading}
                >
                  {isLoading
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
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center text-sm text-gray-500">
        <p>
          Pagamento via Mercado Pago • Implementação é pagamento único •
          Mensalidade recorrente • Garantia incondicional de 30 dias
        </p>
      </div>
    </Section>
  );
};

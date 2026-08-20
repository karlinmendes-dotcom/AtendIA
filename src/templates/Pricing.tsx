'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { PricingCard } from '@/features/billing/PricingCard';
import { Section } from '@/features/landing/Section';
import { useMercadoPago } from '@/hooks/useMercadoPago';
import { AllPlans } from '@/utils/PricingPlans';

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
    >
      <div className="mb-8 text-center">
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Escolha a solução ideal para transformar seu atendimento em uma
          experiência mais profissional, organizada e inteligente.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="
          grid grid-cols-1 gap-x-6 gap-y-10
          @xl:grid-cols-2
          @4xl:grid-cols-3
        "
      >
        {AllPlans.map(plan => (
          <motion.div key={plan.name} variants={item}>
            <PricingCard
              plan={plan}
              button={(
                <button
                  className={buttonVariants({
                    size: 'sm',
                    className: `w-full transition-all hover:scale-[1.02] ${plan.popular ? 'shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30' : ''}`,
                    variant: plan.popular ? 'default' : 'outline',
                  })}
                  onClick={() => handleCheckout(plan.name, plan.implementationPrice, plan.price)}
                  disabled={isLoading}
                >
                  {isLoading ? 'Carregando...' : `Contratar — R$ ${plan.implementationPrice}`}
                </button>
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        <p>
          💳 Pagamento via Mercado Pago • Implementação é pagamento único •
          Mensalidade recorrente • Garantia incondicional de 30 dias
        </p>
      </div>
    </Section>
  );
};

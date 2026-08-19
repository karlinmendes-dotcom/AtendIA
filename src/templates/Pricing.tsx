'use client';

import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { PricingCard } from '@/features/billing/PricingCard';
import { Section } from '@/features/landing/Section';
import { useMercadoPago } from '@/hooks/useMercadoPago';
import { AllPlans } from '@/utils/PricingPlans';

export const Pricing = () => {
  const t = useTranslations('Pricing');
  const { checkout, isLoading } = useMercadoPago();

  const handleCheckout = async (planName: string, price: number) => {
    const planNames: Record<string, string> = {
      pequeno: 'Plano Pequeno AtendIA',
      medio: 'Plano Médio AtendIA',
      grande: 'Plano Grande AtendIA',
    };

    await checkout({
      planId: planName,
      planName: planNames[planName] || planName,
      price,
    });
  };

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <div className="
        grid grid-cols-1 gap-x-6 gap-y-8
        @xl:grid-cols-2
        @4xl:grid-cols-3
      "
      >
        {AllPlans.map(plan => (
          <PricingCard
            key={plan.name}
            plan={plan}
            button={(
              <button
                className={buttonVariants({
                  size: 'sm',
                  className: 'w-full',
                })}
                onClick={() => handleCheckout(plan.name, plan.price)}
                disabled={isLoading}
              >
                {isLoading ? 'Carregando...' : t('button_text')}
              </button>
            )}
          />
        ))}
      </div>
    </Section>
  );
};

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
      essencial: 'Plano Essencial AtendIA',
      profissional: 'Plano Profissional AtendIA',
      premium: 'Plano Premium AtendIA',
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
      <div className="mb-8 text-center">
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Escolha a solução ideal para transformar seu atendimento em uma
          experiência mais profissional, organizada e inteligente.
        </p>
      </div>

      <div className="
        grid grid-cols-1 gap-x-6 gap-y-10
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
                  className: `w-full ${plan.popular ? '' : ''}`,
                  variant: plan.popular ? 'default' : 'outline',
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

      <div className="mt-10 text-center text-sm text-muted-foreground">
        <p>
          💳 Pagamento via Mercado Pago • Implementação é pagamento único •
          Mensalidade recorrente • Garantia incondicional de 30 dias
        </p>
      </div>
    </Section>
  );
};

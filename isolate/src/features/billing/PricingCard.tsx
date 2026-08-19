import type { PricingPlan } from '@/types/Subscription';
import { useTranslations } from 'next-intl';
import { PricingFeatureList } from './PricingFeatureList';

export const PricingCard = (props: {
  plan: PricingPlan;
  button: React.ReactNode;
}) => {
  const tPlans = useTranslations('PricingPlans');

  return (
    <div
      className={`
        relative rounded-2xl border px-6 py-8 text-center transition-shadow
        ${props.plan.popular
      ? 'scale-[1.02] border-2 border-primary shadow-lg'
      : 'border-border'
    }
      `}
    >
      {props.plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="
            rounded-full bg-primary px-4 py-1 text-xs font-bold
            text-primary-foreground
          "
          >
            ⭐ Mais Escolhido
          </span>
        </div>
      )}

      <div className="text-lg font-semibold">
        {tPlans(`${props.plan.name}_plan_name`)}
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        {tPlans(`${props.plan.name}_plan_description`)}
      </div>

      {/* Mensalidade */}
      <div className="mt-5 flex items-baseline justify-center gap-1">
        <span className="text-sm text-muted-foreground">R$</span>
        <span className="text-5xl font-extrabold tracking-tight">
          {props.plan.price}
        </span>
        <span className="text-sm text-muted-foreground">/mês</span>
      </div>

      {/* Implementação */}
      <div className="mt-2 rounded-lg bg-muted/50 px-3 py-2">
        <span className="text-xs text-muted-foreground">
          Implementação:
          {' '}
        </span>
        <span className="text-sm font-bold">
          R$
          {' '}
          {props.plan.implementationPrice}
        </span>
        <span className="text-xs text-muted-foreground">
          {' '}
          (pagamento único)
        </span>
      </div>

      <div className="mt-5">{props.button}</div>

      <ul className="mt-8 space-y-3">
        <PricingFeatureList planName={props.plan.name} />
      </ul>
    </div>
  );
};

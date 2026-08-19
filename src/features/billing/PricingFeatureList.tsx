import { PricingFeatureItem } from './PricingFeatureItem';

const planFeatures: Record<string, string[]> = {
  pequeno: [
    'Atendente Virtual no WhatsApp',
    'Agendamento simples',
    '1 usuário administrador',
    'Relatórios básicos',
    'Suporte por email',
  ],
  medio: [
    'Atendente Virtual no WhatsApp',
    'Agendamento avançado',
    '3 usuários administradores',
    'Relatórios completos',
    'Suporte prioritário',
    'Lembretes automáticos',
    'Integração com Google Calendar',
  ],
  grande: [
    'Atendente Virtual no WhatsApp',
    'Agendamento ilimitado',
    'Usuários ilimitados',
    'Relatórios avançados com IA',
    'Suporte 24/7',
    'Lembretes automáticos',
    'Integração com Google Calendar',
    'Multi-unidades',
    'API personalizada',
    'Treinamento dedicado',
  ],
};

export const PricingFeatureList = (props: { planName: string }) => {
  const features = planFeatures[props.planName] || [];

  return (
    <>
      {features.map(feature => (
        <PricingFeatureItem key={feature}>{feature}</PricingFeatureItem>
      ))}
    </>
  );
};

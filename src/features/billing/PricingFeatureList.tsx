import { PricingFeatureItem } from './PricingFeatureItem';

const planFeatures: Record<string, string[]> = {
  essencial: [
    'Sistema de agendamento online',
    'Página profissional de agendamento',
    'Cadastro de serviços e preços',
    'Organização de horários de atendimento',
    'Configuração dos dias de funcionamento',
    'Cadastro e gerenciamento de clientes',
    'Painel administrativo básico',
    'Visualização dos agendamentos do dia',
    'Personalização com identidade do negócio',
    'Responsividade para celular',
    'Hospedagem e infraestrutura incluída',
    'Suporte técnico',
  ],
  profissional: [
    'Tudo do Plano Essencial',
    '🤖 1 Assistente de IA no painel (Gemini)',
    'CRM completo de clientes',
    'Histórico e relacionamento com clientes',
    'Automação de confirmações por WhatsApp',
    'Lembretes automáticos de agendamento',
    'Gestão avançada da agenda',
    'Regras personalizadas do estabelecimento',
    'Relatórios e indicadores básicos',
    'Integração com API Meta (WhatsApp)',
    'Página profissional mais completa',
    'Personalização visual avançada',
    'Suporte prioritário',
    'Manutenção e atualizações contínuas',
  ],
  premium: [
    'Tudo do Plano Profissional',
    '🤖 2 Assistentes de IA Gemini incluídos',
    'IA para atendimento direto ao cliente',
    'IA para automações e controle no painel',
    'Automações avançadas de comunicação',
    'Disparo automático via API oficial Meta',
    'Campanhas de marketing automatizadas',
    'CRM completo com inteligência',
    'Relatórios e indicadores avançados',
    'Painel administrativo completo',
    'Personalização total da plataforma',
    'Integrações premium disponíveis',
    'Configurações específicas por negócio',
    'Suporte dedicado e prioritário',
    'Manutenção contínua e atualizações',
  ],
};

export const PricingFeatureList = (props: { planName: string }) => {
  const features = planFeatures[props.planName] || [];

  return (
    <>
      {features.map(feature => (
        <PricingFeatureItem
          key={feature}
          highlighted={feature.startsWith('🤖')}
        >
          {feature}
        </PricingFeatureItem>
      ))}
    </>
  );
};

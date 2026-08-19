import { PricingFeatureItem } from './PricingFeatureItem';

const planFeatures: Record<string, string[]> = {
  essencial: [
    'Sistema de agendamento online',
    'Página profissional de agendamento',
    'Cadastro de serviços',
    'Cadastro de horários de atendimento',
    'Configuração dos dias de funcionamento',
    'Bloqueio de horários indisponíveis',
    'Cadastro e gerenciamento de clientes',
    'Painel administrativo básico',
    'Visualização dos agendamentos',
    'Configuração das informações do negócio',
    'Personalização básica da identidade visual',
    'Responsividade para celular',
    'Manutenção técnica',
    'Hospedagem/infraestrutura',
    'Suporte básico',
  ],
  profissional: [
    'Tudo do Plano Essencial',
    'CRM de clientes',
    'Histórico de clientes',
    'Organização do relacionamento com clientes',
    'Status dos clientes',
    'Automação de confirmações',
    'Lembretes de agendamento',
    'Gestão mais completa da agenda',
    'Regras personalizadas do estabelecimento',
    'Página profissional mais completa',
    'Personalização visual avançada',
    'Recursos para retenção e retorno de clientes',
    'Relatórios básicos',
    'Recursos adicionais de gestão',
    'Suporte prioritário',
    'Manutenção e atualizações',
  ],
  premium: [
    'Tudo do Plano Profissional',
    'Sistema completo de agendamento',
    'CRM completo',
    'Histórico e relacionamento com clientes',
    'Automações avançadas',
    'Recursos inteligentes de atendimento',
    'Assistente de IA configurado para o negócio',
    'IA baseada nas informações e regras cadastradas',
    'Automação de comunicação',
    'Recursos avançados de retenção de clientes',
    'Relatórios e indicadores',
    'Painel administrativo avançado',
    'Personalização avançada da plataforma',
    'Configurações específicas para o negócio',
    'Integrações disponíveis conforme estrutura do projeto',
    'Suporte prioritário',
    'Manutenção contínua',
    'Atualizações da plataforma',
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

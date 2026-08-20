import { PricingFeatureItem } from './PricingFeatureItem';
import { GoogleGeminiIcon } from '@/components/BrandIcons';

const planFeatures: Record<string, Array<{ text: string; isAI?: boolean }>> = {
  essencial: [
    { text: 'Sistema de agendamento online' },
    { text: 'Página profissional de agendamento' },
    { text: 'Cadastro de serviços e preços' },
    { text: 'Organização de horários de atendimento' },
    { text: 'Configuração dos dias de funcionamento' },
    { text: 'Cadastro e gerenciamento de clientes' },
    { text: 'Painel administrativo básico' },
    { text: 'Visualização dos agendamentos do dia' },
    { text: 'Personalização com identidade do negócio' },
    { text: 'Responsividade para celular' },
    { text: 'Hospedagem e infraestrutura incluída' },
    { text: 'Suporte técnico' },
  ],
  profissional: [
    { text: 'Tudo do Plano Essencial' },
    { text: '1 Assistente de IA Gemini no painel', isAI: true },
    { text: 'CRM completo de clientes' },
    { text: 'Histórico e relacionamento com clientes' },
    { text: 'Automação de confirmações por WhatsApp' },
    { text: 'Lembretes automáticos de agendamento' },
    { text: 'Gestão avançada da agenda' },
    { text: 'Regras personalizadas do estabelecimento' },
    { text: 'Relatórios e indicadores básicos' },
    { text: 'Integração com API Meta (WhatsApp)' },
    { text: 'Página profissional mais completa' },
    { text: 'Personalização visual avançada' },
    { text: 'Suporte prioritário' },
    { text: 'Manutenção e atualizações contínuas' },
  ],
  premium: [
    { text: 'Tudo do Plano Profissional' },
    { text: '2 Assistentes de IA Gemini incluídos', isAI: true },
    { text: 'IA para atendimento direto ao cliente', isAI: true },
    { text: 'IA para automações e controle no painel', isAI: true },
    { text: 'Automações avançadas de comunicação' },
    { text: 'Disparo automático via API oficial Meta' },
    { text: 'Campanhas de marketing automatizadas' },
    { text: 'CRM completo com inteligência' },
    { text: 'Relatórios e indicadores avançados' },
    { text: 'Painel administrativo completo' },
    { text: 'Personalização total da plataforma' },
    { text: 'Integrações premium disponíveis' },
    { text: 'Configurações específicas por negócio' },
    { text: 'Suporte dedicado e prioritário' },
    { text: 'Manutenção contínua e atualizações' },
  ],
};

export const PricingFeatureList = (props: { planName: string }) => {
  const features = planFeatures[props.planName] || [];

  return (
    <>
      {features.map(feature => (
        <PricingFeatureItem
          key={feature.text}
          highlighted={feature.isAI}
          icon={feature.isAI ? <GoogleGeminiIcon className="size-4 text-[#4285F4]" /> : undefined}
        >
          {feature.text}
        </PricingFeatureItem>
      ))}
    </>
  );
};

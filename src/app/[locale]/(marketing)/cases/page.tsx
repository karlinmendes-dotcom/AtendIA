import type { Metadata } from 'next';
import { Link } from '@/libs/I18nNavigation';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata: Metadata = {
  title: 'Como Funciona na Prática — AtendIA',
  description: 'Veja como a AtendIA transforma o atendimento de pequenos negócios.',
};

const demoFeatures = [
  {
    title: 'Página Profissional',
    description: 'Seus clientes acessam uma página bonita e moderna com a identidade do seu negócio. Tudo personalizado com suas cores, logo e informações.',
    icon: '🌐',
    details: [
      'Design moderno e responsivo',
      'Identidade visual do negócio',
      'Informações de contato e localização',
      'Serviços e preços visíveis',
    ],
  },
  {
    title: 'Sistema de Agendamento',
    description: 'Clientes escolhem o serviço, data e horário direto pelo celular. Sem ligações, sem filas, sem WhatsApp.',
    icon: '📅',
    details: [
      'Escolha de serviço, data e horário',
      'Horários disponíveis em tempo real',
      'Bloqueio automático de horários ocupados',
      'Confirmação imediata do agendamento',
    ],
  },
  {
    title: 'Painel Administrativo',
    description: 'Gerencie tudo por um painel profissional: agenda, clientes, serviços e relatórios.',
    icon: '📊',
    details: [
      'Visualização da agenda do dia/semana',
      'Cadastro e gestão de clientes',
      'Gerenciamento de serviços e preços',
      'Relatórios de atendimentos',
    ],
  },
  {
    title: 'CRM e Histórico',
    description: 'Saiba quem são seus melhores clientes, seus histórico e preferências.',
    icon: '👥',
    details: [
      'Perfil completo de cada cliente',
      'Histórico de atendimentos',
      'Preferências e observações',
      'Indicadores de fidelidade',
    ],
  },
  {
    title: 'Automação',
    description: 'Confirmações, lembretes e respostas automáticas. Você não precisa mais lembrar de nada.',
    icon: '⚡',
    details: [
      'Confirmação automática do agendamento',
      'Lembrete antes do horário',
      'Mensagem de agradecimento pós-atendimento',
      'Respostas rápidas para dúvidas comuns',
    ],
  },
  {
    title: 'Inteligência Artificial',
    description: 'Assistente virtual que responde seus clientes 24h por dia, mesmo quando você está atendendo outro.',
    icon: '🤖',
    details: [
      'Respostas inteligentes baseadas no negócio',
      'Disponível 24h por dia, 7 dias por semana',
      'Apreende com as informações do negócio',
      'Integração com WhatsApp e web',
    ],
  },
];

const demoFlow = [
  {
    step: '1',
    title: 'Seu cliente abre o link',
    description: 'Acessa a página profissional do seu negócio pelo celular.',
    visual: '📱 → Link do negócio',
  },
  {
    step: '2',
    title: 'Escolhe o serviço',
    description: 'Visualiza os serviços, preços e duração disponíveis.',
    visual: '💇 Corte → R$ 45 → 30min',
  },
  {
    step: '3',
    title: 'Seleciona o horário',
    description: 'Escolhe o dia e horário disponível na agenda.',
    visual: '📅 Seg 10:00 ✓',
  },
  {
    step: '4',
    title: 'Confirma o agendamento',
    description: 'Recebe confirmação imediata e lembrete antes do horário.',
    visual: '✅ Agendado! Lembrete em 24h',
  },
  {
    step: '5',
    title: 'Você visualiza no painel',
    description: 'O agendamento aparece automaticamente na sua agenda.',
    visual: '📊 Painel → Novo agendamento',
  },
];

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <span className="
            rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold
            text-primary
          "
          >
            Demonstração
          </span>
          <h1 className="mt-4 text-4xl font-bold">Veja como funciona na prática</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Entenda o que seu negócio recebe quando contrata a AtendIA.
          </p>
        </div>

        {/* Features */}
        <div className="
          mt-16 grid gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
        >
          {demoFeatures.map(feature => (
            <div
              key={feature.title}
              className="
                rounded-2xl border border-border p-6 transition-shadow
                hover:shadow-md
              "
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.details.map(detail => (
                  <li
                    key={detail}
                    className="
                      flex items-start gap-2 text-sm text-muted-foreground
                    "
                  >
                    <span className="mt-0.5 text-primary">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flow */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold">Do agendamento ao atendimento</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Assim funciona a experiência do seu cliente com a AtendIA.
          </p>
          <div className="mt-10 space-y-6">
            {demoFlow.map(item => (
              <div
                key={item.step}
                className="
                  flex items-center gap-6 rounded-2xl border border-border p-6
                  transition-shadow
                  hover:shadow-sm
                "
              >
                <span className="
                  flex size-12 shrink-0 items-center justify-center rounded-full
                  bg-primary text-lg font-bold text-primary-foreground
                "
                >
                  {item.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className="
                  hidden rounded-lg bg-muted px-4 py-2 text-sm font-medium
                  sm:block
                "
                >
                  {item.visual}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Pronto para ver no seu negócio?</h2>
          <p className="mt-3 text-muted-foreground">
            Comece hoje e veja a diferença. Garantia incondicional de 30 dias.
          </p>
          <div className="
            mt-6 flex flex-col items-center justify-center gap-3
            sm:flex-row
          "
          >
            <Link
              href="/#pricing"
              className="
                rounded-xl bg-primary px-6 py-3 text-sm font-semibold
                text-primary-foreground transition
                hover:opacity-90
              "
            >
              Ver Planos →
            </Link>
            <a
              href="https://wa.me/5527998041197"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl border border-border px-6 py-3 text-sm font-semibold
                transition
                hover:bg-muted
              "
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

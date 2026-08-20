import type { Metadata } from 'next';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata: Metadata = {
  title: 'Empresa — AtendIA',
  description: 'Conheça a AtendIA: soluções digitais de agendamento para pequenos negócios.',
};

export default function EmpresaPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sobre a AtendIA</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Transformando atendimentos em experiências profissionais.
          </p>
        </div>

        {/* Missão */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Nossa Missão</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A AtendIA nasceu com um objetivo claro: ajudar pequenos negócios que trabalham com
            agendamento a se profissionalizar, organizar seus atendimentos e recuperar o tempo
            que perdem no dia a dia.
          </p>
          <p className="mt-4 text-muted-foreground">
            Sabemos que donos de salões, barbearias, clínicas e estúdios passam horas respondendo
            WhatsApp, confirmando horários e organizando agendas no papel. Enquanto isso, clientes
            esperam, desistem e vão para a concorrência. A AtendIA resolve isso com tecnologia
            acessível, inteligente e com a identidade de cada negócio.
          </p>
        </section>

        {/* Valores */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Nossos Valores</h2>
          <div className="
            mt-8 grid gap-6
            md:grid-cols-3
          "
          >
            {[
              {
                title: 'Simplicidade',
                desc: 'Tecnologia que funciona para quem não entende de tecnologia.',
              },
              {
                title: 'Profissionalismo',
                desc: 'Cada negócio merece uma presença digital à altura do seu trabalho.',
              },
              {
                title: 'Resultado',
                desc: 'Não vendemos software. Entregamos mais clientes, mais organização e mais lucro.',
              },
            ].map(v => (
              <div
                key={v.title}
                className="rounded-2xl border border-border p-6"
              >
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Como Funciona</h2>
          <div className="mt-8 space-y-6">
            {[
              { step: '1', text: 'Você nos conta sobre o seu negócio, serviços e horários.' },
              { step: '2', text: 'Nossa equipe configura e personaliza tudo com a identidade do seu negócio.' },
              { step: '3', text: 'Seus clientes começam a agendar pelo celular, de forma simples.' },
              { step: '4', text: 'Você gerencia tudo por um painel profissional, com IA e automação.' },
            ].map(s => (
              <div key={s.step} className="flex items-start gap-4">
                <span className="
                  flex size-10 shrink-0 items-center justify-center rounded-full
                  bg-primary text-sm font-bold text-primary-foreground
                "
                >
                  {s.step}
                </span>
                <p className="pt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="mt-16 rounded-2xl bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Fale com a gente</h2>
          <p className="mt-3 text-muted-foreground">
            Tem dúvidas ou quer saber qual plano ideal para o seu negócio?
          </p>
          <a
            href="https://wa.me/5527998041197"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3
              text-sm font-semibold text-primary-foreground transition
              hover:opacity-90
            "
          >
            💬 Chamar no WhatsApp
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            ou envie um e-mail para
            {' '}
            <a
              href="mailto:contato@atendia.com.br"
              className="
                text-primary
                hover:underline
              "
            >
              contato@atendia.com.br
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import { Link } from '@/libs/I18nNavigation';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata: Metadata = {
  title: 'Contato — AtendIA',
  description: 'Fale com a AtendIA. Tire suas dúvidas sobre nossos sistemas de agendamento.',
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Fale com a gente</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas dúvidas, peça uma demonstração ou descubra qual plano ideal para o seu negócio.
          </p>
        </div>

        <div className="
          mt-12 grid gap-8
          md:grid-cols-2
        "
        >
          {/* WhatsApp */}
          <div className="rounded-2xl border border-border p-8 text-center">
            <div className="
              mx-auto mb-4 flex size-16 items-center justify-center rounded-full
              bg-green-500/10
            "
            >
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-xl font-semibold">WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Resposta rápida pelo WhatsApp. Atendemos em horário comercial.
            </p>
            <a
              href="https://wa.me/5527998041197"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 inline-flex items-center rounded-xl bg-green-500 px-6 py-3
                text-sm font-semibold text-white transition
                hover:bg-green-600
              "
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-border p-8 text-center">
            <div className="
              mx-auto mb-4 flex size-16 items-center justify-center rounded-full
              bg-primary/10
            "
            >
              <span className="text-3xl">📧</span>
            </div>
            <h2 className="text-xl font-semibold">E-mail</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Envie um e-mail com sua dúvida ou solicitação. Respondemos em até 24 horas úteis.
            </p>
            <a
              href="mailto:contato@atendia.com.br"
              className="
                mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3
                text-sm font-semibold text-primary-foreground transition
                hover:opacity-90
              "
            >
              Enviar E-mail
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="mt-12 rounded-2xl bg-primary/5 p-8">
          <h2 className="text-center text-xl font-semibold">Horário de Atendimento</h2>
          <div className="
            mt-6 grid gap-4 text-center
            md:grid-cols-3
          "
          >
            <div>
              <p className="text-sm font-medium">Segunda a Sexta</p>
              <p className="text-muted-foreground">09:00 às 18:00</p>
            </div>
            <div>
              <p className="text-sm font-medium">Sábado</p>
              <p className="text-muted-foreground">09:00 às 13:00</p>
            </div>
            <div>
              <p className="text-sm font-medium">Domingo e Feriados</p>
              <p className="text-muted-foreground">Fechado</p>
            </div>
          </div>
        </div>

        {/* FAQ rápido */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Perguntas frequentes? Confira nossa
            {' '}
            <Link
              href="/#faq"
              className="
                text-primary
                hover:underline
              "
            >
              página de FAQ
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

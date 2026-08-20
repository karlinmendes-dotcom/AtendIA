import type { Metadata } from 'next';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata: Metadata = {
  title: 'Política de Cancelamento e Reembolso — AtendIA',
  description: 'Política de cancelamento, reembolso e garantia da AtendIA.',
};

export default function CancelamentoPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Política de Cancelamento e Reembolso</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 20 de agosto de 2026</p>

        <div className="mt-8 space-y-8 text-foreground">
          {/* Garantia */}
          <section className="
            rounded-2xl border border-green-200 bg-green-50 p-6
          "
          >
            <h2 className="text-xl font-semibold text-green-800">🛡️ Garantia Incondicional de 30 Dias</h2>
            <p className="mt-3">
              Se não estiver satisfeito com o serviço nos primeiros 30 dias após a contratação,
              devolvemos
              {' '}
              <strong>100% do valor pago</strong>
              {' '}
              — tanto a implementação quanto a primeira
              mensalidade. Sem perguntas, sem burocracia.
            </p>
            <p className="mt-2 text-sm text-green-700">
              Para solicitar o reembolso, entre em contato pelo WhatsApp:
              {' '}
              <a
                href="https://wa.me/5527998041197"
                className="
                  font-medium
                  hover:underline
                "
              >
                +55 27 99804-1197
              </a>
            </p>
          </section>

          {/* Implementação */}
          <section>
            <h2 className="text-xl font-semibold">Implementação (Pagamento Único)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A implementação é um pagamento único, cobrado na contratação.</li>
              <li>Este valor cobre a configuração, personalização e entrega do sistema.</li>
              <li>Dentro dos primeiros 30 dias, o valor da implementação é integralmente reembolsável.</li>
              <li>Após 30 dias, não há reembolso da implementação.</li>
            </ul>
          </section>

          {/* Mensalidade */}
          <section>
            <h2 className="text-xl font-semibold">Mensalidade (Cobrança Recorrente)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A mensalidade é cobrada automaticamente a cada 30 dias.</li>
              <li>Dentro dos primeiros 30 dias, a mensalidade é integralmente reembolsável.</li>
              <li>Após 30 dias, o cancelamento é efetivo ao final do ciclo de cobrança atual.</li>
              <li>Não há reembolso proporcional para o ciclo em andamento após o período de garantia.</li>
            </ul>
          </section>

          {/* Cancelamento */}
          <section>
            <h2 className="text-xl font-semibold">Como Cancelar</h2>
            <p className="mt-3 text-muted-foreground">
              Para cancelar sua assinatura, entre em contato conosco:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>WhatsApp:</strong>
                {' '}
                <a
                  href="https://wa.me/5527998041197"
                  className="
                    text-primary
                    hover:underline
                  "
                >
                  +55 27 99804-1197
                </a>
              </li>
              <li>
                <strong>E-mail:</strong>
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
              </li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              O cancelamento será processado em até 2 dias úteis. Você receberá uma confirmação
              pelo WhatsApp ou e-mail informado.
            </p>
          </section>

          {/* Após cancelamento */}
          <section>
            <h2 className="text-xl font-semibold">Após o Cancelamento</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Acesso à plataforma será desativado ao final do ciclo pago.</li>
              <li>Seus dados serão mantidos por 30 dias e depois excluídos permanentemente.</li>
              <li>Caso deseje reativar o serviço, basta contratar novamente.</li>
            </ul>
          </section>

          {/* Contato */}
          <section className="rounded-2xl bg-primary/5 p-6 text-center">
            <p className="text-muted-foreground">
              Dúvidas sobre cancelamento ou reembolso? Fale conosco:
            </p>
            <a
              href="https://wa.me/5527998041197"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4 inline-flex items-center rounded-xl bg-primary px-6 py-3
                text-sm font-semibold text-primary-foreground transition
                hover:opacity-90
              "
            >
              💬 Falar no WhatsApp
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

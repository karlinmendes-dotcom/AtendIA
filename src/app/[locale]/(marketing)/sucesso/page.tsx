import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { Section } from '@/features/landing/Section';

type SucessoPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(_props: SucessoPageProps): Promise<Metadata> {
  return {
    title: 'Pagamento Aprovado - AtendIA',
    description: 'Seu pagamento foi aprovado! Preencha os dados do seu negócio.',
  };
}

export default async function SucessoPage(props: SucessoPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <Section className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <div className="
            mx-auto mb-6 flex size-20 items-center justify-center rounded-full
            bg-green-100
          "
          >
            <svg
              className="size-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Pagamento Aprovado! 🎉
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Parabéns! Seu pagamento foi processado com sucesso.
            Agora precisamos de algumas informações para configurar sua atendente virtual.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 text-left">
          <h2 className="mb-6 text-xl font-semibold">
            Próximo passo: Preencher dados do negócio
          </h2>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Nome do Negócio *
              </label>
              <input
                type="text"
                className="
                  w-full rounded-md border border-border bg-background px-4 py-2
                "
                placeholder="Ex: Salão Beleza Pura"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Nome do Proprietário *
              </label>
              <input
                type="text"
                className="
                  w-full rounded-md border border-border bg-background px-4 py-2
                "
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Tipo de Negócio *
              </label>
              <select className="
                w-full rounded-md border border-border bg-background px-4 py-2
              "
              >
                <option value="">Selecione...</option>
                <option value="salao">Salão de Beleza</option>
                <option value="barbearia">Barbearia</option>
                <option value="clinica">Clínica</option>
                <option value="lava-jato">Lava-Jato</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                WhatsApp do Negócio *
              </label>
              <input
                type="tel"
                className="
                  w-full rounded-md border border-border bg-background px-4 py-2
                "
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email (opcional)
              </label>
              <input
                type="email"
                className="
                  w-full rounded-md border border-border bg-background px-4 py-2
                "
                placeholder="contato@seudominio.com"
              />
            </div>

            <button
              type="submit"
              className={buttonVariants({ className: 'w-full mt-6' })}
            >
              Enviar Dados e Iniciar Configuração
            </button>
          </form>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Após o envio, nossa equipe entrará em contato para finalizar a configuração.
          O prazo de entrega é de até 48 horas úteis.
        </p>
      </div>
    </Section>
  );
}

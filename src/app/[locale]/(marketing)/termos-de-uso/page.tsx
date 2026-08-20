import type { Metadata } from 'next';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata: Metadata = {
  title: 'Termos de Uso — AtendIA',
  description: 'Termos de Uso da plataforma AtendIA.',
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Termos de Uso</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 20 de agosto de 2026</p>

        <div className="mt-8 space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-semibold">1. Aceitação dos termos</h2>
            <p className="mt-2">
              Ao acessar ou utilizar a plataforma AtendIA, você concorda com estes Termos de Uso.
              Se não concordar, não utilize o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Descrição do serviço</h2>
            <p className="mt-2">
              A AtendIA oferece sistemas digitais de agendamento, automação e gestão de clientes
              para pequenos negócios. Os serviços incluem página profissional, sistema de
              agendamento, CRM, automações e recursos de inteligência artificial, conforme o
              plano contratado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Cadastro e conta</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Para utilizar o serviço, é necessário criar uma conta com dados verdadeiros.</li>
              <li>Você é responsável por manter a confidencialidade de sua senha.</li>
              <li>Notifique-nos imediatamente sobre uso não autorizado de sua conta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Planos e pagamentos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>A implementação é um pagamento único, conforme o plano escolhido.</li>
              <li>A mensalidade é recorrente e debitada automaticamente.</li>
              <li>Pagamentos processados pelo Mercado Pago.</li>
              <li>Garantia incondicional de 30 dias: se não estiver satisfeito, devolvemos 100% do valor.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Uso aceitável</h2>
            <p className="mt-2">Ao utilizar a plataforma, você concorda em NÃO:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Usar o serviço para fins ilegais ou não autorizados.</li>
              <li>Tentar acessar contas de outros usuários.</li>
              <li>Interromper ou sobrecarregar a infraestrutura.</li>
              <li>Reproduzir, distribuir ou modificar o serviço sem autorização.</li>
              <li>Enviar spam ou conteúdo ofensivo através da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Propriedade intelectual</h2>
            <p className="mt-2">
              Todo o conteúdo, código, design e funcionalidades da plataforma são de propriedade
              da AtendIA e protegidos por leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Disponibilidade do serviço</h2>
            <p className="mt-2">
              Nos esforçamos para manter o serviço disponível 24/7, mas não garantimos
              disponibilidade ininterrupta. Manutenções programadas serão comunicadas com
              antecedência.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Limitação de responsabilidade</h2>
            <p className="mt-2">
              A AtendIA não se responsabiliza por danos indiretos, perda de dados ou
              interrupções causadas por terceiros (provedores de hospedagem, APIs externas).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Cancelamento</h2>
            <p className="mt-2">
              Você pode cancelar sua assinatura a qualquer momento. O cancelamento é efetivo ao
              final do ciclo de cobrança atual. Não há reembolso proporcional após o período de
              garantia de 30 dias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Alterações nos termos</h2>
            <p className="mt-2">
              Reservamo-nos o direito de alterar estes termos. Alterações significativas serão
              comunicadas por e-mail com pelo menos 30 dias de antecedência.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Contato</h2>
            <p className="mt-2">
              Dúvidas? Entre em contato:
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
        </div>
      </main>
      <Footer />
    </>
  );
}

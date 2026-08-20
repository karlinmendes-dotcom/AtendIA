import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — AtendIA',
  description: 'Política de Privacidade da AtendIA. Saiba como tratamos seus dados.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: 20 de agosto de 2026</p>

      <div className="mt-8 space-y-6 text-foreground">
        <section>
          <h2 className="text-xl font-semibold">1. Quem somos</h2>
          <p className="mt-2">
            A AtendIA é uma marca comercial que oferece sistemas digitais de agendamento e
            automação para pequenos negócios. Esta Política de Privacidade descreve como
            coletamos, usamos e protegemos suas informações pessoais.
          </p>
          <p className="mt-2">
            <strong>Controlador de dados:</strong>
            {' '}
            AtendIA — contato:
            <a
              href="mailto:contato@atendia.com.br"
              className="
                text-primary
                hover:underline
              "
            >
              {' '}
              contato@atendia.com.br
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Informações que coletamos</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <strong>Dados de cadastro:</strong>
              {' '}
              nome, e-mail, telefone, dados do negócio.
            </li>
            <li>
              <strong>Dados de uso:</strong>
              {' '}
              informações sobre como você utiliza a plataforma.
            </li>
            <li>
              <strong>Dados de pagamento:</strong>
              {' '}
              processados pelo Mercado Pago — não armazenamos dados de cartão.
            </li>
            <li>
              <strong>Cookies:</strong>
              {' '}
              utilizados para autenticação e melhoria da experiência.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Como usamos seus dados</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Fornecer e manter o serviço contratado.</li>
            <li>Processar pagamentos e gerenciar sua assinatura.</li>
            <li>Enviar comunicações sobre sua conta (confirmações, lembretes).</li>
            <li>Melhorar nossa plataforma e experiência do usuário.</li>
            <li>Cumprir obrigações legais.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Compartilhamento de dados</h2>
          <p className="mt-2">Não vendemos seus dados pessoais. Compartilhamos apenas com:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <strong>Mercado Pago</strong>
              {' '}
              — processamento de pagamentos.
            </li>
            <li>
              <strong>Convex</strong>
              {' '}
              — hospedagem do banco de dados.
            </li>
            <li>
              <strong>Vercel</strong>
              {' '}
              — hospedagem da aplicação.
            </li>
            <li>Quando exigido por lei ou ordem judicial.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Segurança dos dados</h2>
          <p className="mt-2">
            Utilizamos medidas técnicas e organizacionais adequadas para proteger seus dados,
            incluindo criptografia em trânsito (HTTPS) e controle de acesso autenticado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Seus direitos (LGPD)</h2>
          <p className="mt-2">De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Acessar seus dados pessoais.</li>
            <li>Corrigir dados incompletos ou desatualizados.</li>
            <li>Solicitar a exclusão de seus dados.</li>
            <li>Revogar o consentimento a qualquer momento.</li>
            <li>Solicitar a portabilidade dos dados.</li>
          </ul>
          <p className="mt-2">
            Para exercer esses direitos, entre em contato:
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

        <section>
          <h2 className="text-xl font-semibold">7. Retenção de dados</h2>
          <p className="mt-2">
            Mantemos seus dados pelo tempo necessário para fornecer o serviço contratado e
            cumprir obrigações legais. Após o encerramento da conta, seus dados serão excluídos
            em até 30 dias.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Menores de idade</h2>
          <p className="mt-2">
            Nossa plataforma não é direcionada a menores de 18 anos. Não coletamos
            intencionalmente dados de menores.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Alterações nesta política</h2>
          <p className="mt-2">
            Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças
            significativas por e-mail ou através da plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política? Entre em contato:
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
  );
}

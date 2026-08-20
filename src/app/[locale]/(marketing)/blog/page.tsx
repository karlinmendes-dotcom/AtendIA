import type { Metadata } from 'next';
import { Link } from '@/libs/I18nNavigation';

export const metadata: Metadata = {
  title: 'Blog — AtendIA',
  description: 'Dicas e histórias sobre agendamento, automação e gestão de negócios.',
};

const posts = [
  {
    slug: 'o-preco-de-nao-automatizar',
    title: 'Quanto custa NÃO automatizar seu salão?',
    excerpt:
      'Enquanto você para o atendimento para responder WhatsApp, outro cliente está perdendo a paciência na fila. Descubra o custo real do agendamento manual.',
    date: '20 Ago 2026',
    tag: 'Gestão',
  },
  {
    slug: 'o-cliente-que-desistiu',
    title: 'O cliente que desistiu de esperar — e você nem percebeu',
    excerpt:
      'Seu cliente mandou "oi" pelo WhatsApp às 14h. Você só viu às 17h. Ele já marcou com a concorrência. Isso acontece todo dia.',
    date: '15 Ago 2026',
    tag: 'Relacionamento',
  },
  {
    slug: 'automacao-whatsapp',
    title: 'Automação no WhatsApp: como nunca mais esquecer um lembrete',
    excerpt:
      'Lembretes automáticos reduzem faltas em até 70%. Descubra como a automação transforma a comunicação com seus clientes.',
    date: '10 Ago 2026',
    tag: 'Automação',
  },
  {
    slug: 'ia-para-negocios',
    title: 'IA para pequenos negócios: não é mais coisa de filme',
    excerpt:
      'Um assistente virtual que agenda, responde e gerencia seus clientes 24h por dia. Isso já é realidade para milhares de negócios.',
    date: '5 Ago 2026',
    tag: 'Inteligência Artificial',
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Blog AtendIA</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Dicas, histórias e ferramentas para profissionalizar seu atendimento.
        </p>
      </div>

      <div className="
        mt-12 grid gap-8
        md:grid-cols-2
      "
      >
        {posts.map(post => (
          <article
            key={post.slug}
            className="
              group rounded-2xl border border-border p-6 transition-shadow
              hover:shadow-md
            "
          >
            <span className="
              rounded-full bg-primary/10 px-3 py-1 text-xs font-medium
              text-primary
            "
            >
              {post.tag}
            </span>
            <h2 className="mt-4 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="
                  text-sm font-medium text-primary
                  hover:underline
                "
              >
                Ler mais →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold">Chega de perder tempo e clientes</h2>
        <p className="mt-3 text-muted-foreground">
          Enquanto você lê isso, seu potencial cliente está marcando horário com a concorrência.
          Não perca mais tempo.
        </p>
        <Link
          href="/#pricing"
          className="
            mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3
            text-sm font-semibold text-primary-foreground transition
            hover:opacity-90
          "
        >
          Ver Planos →
        </Link>
      </div>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import { GroqIcon, GoogleGeminiIcon } from '@/components/BrandIcons';

const MetaAIIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5h-9v-1h9v1zm0-3h-9v-1h9v1zm0-3h-9v-1h9v1z" fill="white" />
  </svg>
);

const OpenAIIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const GrokIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PerplexityIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
  </svg>
);

const models = [
  {
    company: 'Groq',
    name: 'Qwen 3.6',
    description: 'IA poderosa e consistente, com raciocínio avançado e domínio em múltiplos idiomas.',
    gradient: 'from-orange-500 to-red-500',
    Icon: GroqIcon,
  },
  {
    company: 'Meta',
    name: 'Llama 4',
    description: 'O modelo da Meta com capacidades para uso avançados, agentes de conversação e assistentes.',
    gradient: 'from-blue-500 to-indigo-600',
    Icon: MetaAIIcon,
  },
  {
    company: 'Google',
    name: 'Gemini 3.1',
    description: 'A nova IA do Google, com contexto ampliado e excelente desempenho para textos longos.',
    gradient: 'from-green-500 to-emerald-600',
    Icon: GoogleGeminiIcon,
  },
  {
    company: 'OpenAI',
    name: 'GPT-4o',
    description: 'O modelo mais avançado da OpenAI, com compreensão visual e raciocínio complexo.',
    gradient: 'from-teal-500 to-cyan-600',
    Icon: OpenAIIcon,
  },
  {
    company: 'xAI',
    name: 'Grok',
    description: 'IA do Elon Musk com acesso a informações em tempo real e respostas criativas.',
    gradient: 'from-gray-600 to-gray-800',
    Icon: GrokIcon,
  },
  {
    company: 'Perplexity',
    name: 'Sonar',
    description: 'IA focada em Pesquisas, tanto em tempo real na internet, quanto pesquisas científicas.',
    gradient: 'from-violet-500 to-purple-600',
    Icon: PerplexityIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const AIModels = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            MODELOS DE IA
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Acesse os melhores{' '}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              modelos de IA
            </span>{' '}
            do mundo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Nosso sistema utiliza as IAs mais avançadas do mercado para automatizar seu atendimento e impressionar seus clientes.
          </p>
        </motion.div>

        {/* Models Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {models.map(model => (
            <motion.div
              key={model.name}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${model.gradient} p-6 shadow-lg transition-shadow hover:shadow-2xl`}
            >
              {/* Company + Icon */}
              <div className="mb-2 flex items-center gap-2">
                <model.Icon className="size-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  {model.company}
                </span>
              </div>

              {/* Model name */}
              <h3 className="text-xl font-extrabold text-white">{model.name}</h3>

              {/* Description */}
              <p className="mt-2 text-sm/relaxed text-white/80">{model.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

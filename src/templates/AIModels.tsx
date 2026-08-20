'use client';

import { motion } from 'framer-motion';

const models = [
  {
    company: 'Groq',
    name: 'Qwen 3.6',
    description: 'IA poderosa e consistente, com raciocínio avançado e domínio em múltiplos idiomas.',
    gradient: 'from-orange-500 to-red-500',
    icon: '🧠',
  },
  {
    company: 'Meta',
    name: 'Llama 4',
    description: 'O modelo da Meta com capacidades para uso avançados, agentes de conversação e assistentes.',
    gradient: 'from-blue-500 to-indigo-600',
    icon: '🦙',
  },
  {
    company: 'Google',
    name: 'Gemini 3.1',
    description: 'A nova IA do Google, com contexto ampliado e excelente desempenho para textos longos.',
    gradient: 'from-green-500 to-emerald-600',
    icon: '✨',
  },
  {
    company: 'OpenAI',
    name: 'GPT-4o',
    description: 'O modelo mais avançado da OpenAI, com compreensão visual e raciocínio complexo.',
    gradient: 'from-teal-500 to-cyan-600',
    icon: '🤖',
  },
  {
    company: 'xAI',
    name: 'Grok',
    description: 'IA do Elon Musk com acesso a informações em tempo real e respostas criativas.',
    gradient: 'from-gray-600 to-gray-800',
    icon: '⚡',
  },
  {
    company: 'Perplexity',
    name: 'Sonar',
    description: 'IA focada em Pesquisas, tanto em tempo real na internet, quanto pesquisas científicas.',
    gradient: 'from-violet-500 to-purple-600',
    icon: '🔍',
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
            ✨ MODELOS DE IA
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
              {/* Company name */}
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                {model.company}
              </div>

              {/* Model name */}
              <h3 className="text-xl font-extrabold text-white">{model.name}</h3>

              {/* Description */}
              <p className="mt-2 text-sm/relaxed text-white/80">{model.description}</p>

              {/* Icon */}
              <div className="absolute right-4 bottom-4 text-4xl opacity-20 transition-opacity group-hover:opacity-40">
                {model.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

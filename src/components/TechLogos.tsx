'use client';

import { motion } from 'framer-motion';

// Simple Icons CDN - logos profissionais de marcas reais
// Formato: https://cdn.simpleicons.org/{nome}/{cor}
const ICON = (name: string, color: string) =>
  `https://cdn.simpleicons.org/${name}/${color.replace('#', '')}`;

interface TechLogo {
  name: string;
  label: string;
  icon: string;
  color: string;
}

const techLogos: TechLogo[] = [
  // AI Models
  { name: 'openai', label: 'OpenAI', icon: ICON('openai', '#FFFFFF'), color: '#10a37f' },
  { name: 'googlegemini', label: 'Gemini', icon: ICON('googlegemini', '#FFFFFF'), color: '#4285f4' },
  { name: 'anthropic', label: 'Claude', icon: ICON('anthropic', '#FFFFFF'), color: '#d4a574' },
  { name: 'meta', label: 'Meta AI', icon: ICON('meta', '#FFFFFF'), color: '#0668E1' },
  { name: 'deepseek', label: 'DeepSeek', icon: ICON('deepseek', '#FFFFFF'), color: '#4D6BFE' },
  { name: 'xai', label: 'Grok', icon: ICON('xai', '#FFFFFF'), color: '#1DA1F2' },

  // Messaging & Social
  { name: 'whatsapp', label: 'WhatsApp', icon: ICON('whatsapp', '#FFFFFF'), color: '#25D366' },
  { name: 'instagram', label: 'Instagram', icon: ICON('instagram', '#FFFFFF'), color: '#E4405F' },
  { name: 'facebook', label: 'Facebook', icon: ICON('facebook', '#FFFFFF'), color: '#1877F2' },
  { name: 'telegram', label: 'Telegram', icon: ICON('telegram', '#FFFFFF'), color: '#26A5E4' },

  // Tech & Dev
  { name: 'nextdotjs', label: 'Next.js', icon: ICON('nextdotjs', '#FFFFFF'), color: '#000000' },
  { name: 'react', label: 'React', icon: ICON('react', '#FFFFFF'), color: '#61DAFB' },
  { name: 'typescript', label: 'TypeScript', icon: ICON('typescript', '#FFFFFF'), color: '#3178C6' },
  { name: 'tailwindcss', label: 'Tailwind', icon: ICON('tailwindcss', '#FFFFFF'), color: '#06B6D4' },
  { name: 'vercel', label: 'Vercel', icon: ICON('vercel', '#FFFFFF'), color: '#000000' },
  { name: 'convex', label: 'Convex', icon: ICON('convex', '#FFFFFF'), color: '#2dd4bf' },

  // Cloud & Infra
  { name: 'googlecloud', label: 'Google Cloud', icon: ICON('googlecloud', '#FFFFFF'), color: '#4285F4' },
  { name: 'amazonwebservices', label: 'AWS', icon: ICON('amazonwebservices', '#FFFFFF'), color: '#FF9900' },
  { name: 'docker', label: 'Docker', icon: ICON('docker', '#FFFFFF'), color: '#2496ED' },
  { name: 'github', label: 'GitHub', icon: ICON('github', '#FFFFFF'), color: '#FFFFFF' },

  // Payments & Business
  { name: 'mercadopago', label: 'Mercado Pago', icon: ICON('mercadopago', '#FFFFFF'), color: '#009EE3' },
  { name: 'stripe', label: 'Stripe', icon: ICON('stripe', '#FFFFFF'), color: '#635BFF' },
  { name: 'nubank', label: 'Nubank', icon: ICON('nubank', '#FFFFFF'), color: '#820AD1' },

  // Data & Analytics
  { name: 'postgresql', label: 'PostgreSQL', icon: ICON('postgresql', '#FFFFFF'), color: '#4169E1' },
  { name: 'firebase', label: 'Firebase', icon: ICON('firebase', '#FFFFFF'), color: '#FFCA28' },
  { name: 'supabase', label: 'Supabase', icon: ICON('supabase', '#FFFFFF'), color: '#3FCF8E' },

  // Design & Tools
  { name: 'figma', label: 'Figma', icon: ICON('figma', '#FFFFFF'), color: '#F24E1E' },
  { name: 'notion', label: 'Notion', icon: ICON('notion', '#FFFFFF'), color: '#FFFFFF' },
  { name: 'slack', label: 'Slack', icon: ICON('slack', '#FFFFFF'), color: '#4A154B' },
  { name: 'zoom', label: 'Zoom', icon: ICON('zoom', '#FFFFFF'), color: '#2D8CFF' },

  // AI Image Generation
  { name: 'stabilityai', label: 'Stability AI', icon: ICON('stabilityai', '#FFFFFF'), color: '#A970FF' },
  { name: 'huggingface', label: 'Hugging Face', icon: ICON('huggingface', '#FFFFFF'), color: '#FFD21E' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export const TechLogos = () => {
  return (
    <section className="relative overflow-hidden bg-black py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#2dd4bf]/10 px-4 py-1.5 text-sm font-medium text-[#2dd4bf]">
            TECNOLOGIAS
          </span>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Powered by{' '}
            <span className="bg-linear-to-r from-[#2dd4bf] to-blue-400 bg-clip-text text-transparent">
              {techLogos.length}+ tecnologias
            </span>{' '}
            de ponta
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techLogos.map((tech) => (
            <motion.div
              key={tech.label}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: `${tech.color}20`,
                borderColor: `${tech.color}40`,
                transition: { duration: 0.2 },
              }}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 shadow-sm transition-all"
            >
              <img
                src={tech.icon}
                alt={tech.label}
                className="size-5"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-letter')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-letter flex size-5 items-center justify-center rounded text-xs font-bold text-white';
                    span.style.backgroundColor = tech.color;
                    span.textContent = tech.label[0] ?? '';
                    parent.prepend(span);
                  }
                }}
              />
              <span className="text-xs font-medium text-gray-400 group-hover:text-white">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling marquee behind */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap opacity-5"
          >
            {techLogos.concat(techLogos).map((tech, i) => (
              <span key={i} className="text-6xl font-black text-white">
                {tech.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

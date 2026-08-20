'use client';

import { motion } from 'framer-motion';
import { Section } from '@/features/landing/Section';

const businessTypes = [
  '💇 Salões de Beleza',
  '💈 Barbearias',
  '💅 Nail Designers',
  '💆 Clínicas de Estética',
  '🎨 Tatuadores',
  '💆‍♀️ Massagistas',
  '🧖 Studios de Estética',
  '👁️ Lash Designers',
];

export const SocialProof = () => (
  <Section className="py-12">
    <div className="text-center">
      <p className="text-sm font-semibold text-muted-foreground">
        Ideal para negócios que trabalham com agendamento
      </p>
    </div>

    {/* Animated marquee */}
    <div className="relative mt-8 overflow-hidden">
      {/* Fade edges */}
      <div className="
        pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r
        from-background to-transparent
      "
      />
      <div className="
        pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l
        from-background to-transparent
      "
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...businessTypes, ...businessTypes].map((business, i) => (
          <div
            key={`${business}-${i}`}
            className="
              flex items-center gap-2 rounded-full border border-border bg-card
              px-5 py-2.5 text-sm font-medium text-muted-foreground shadow-sm
              transition-colors
              hover:border-primary/30 hover:text-foreground
            "
          >
            {business}
          </div>
        ))}
      </motion.div>
    </div>
  </Section>
);

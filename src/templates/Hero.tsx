'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { badgeVariants } from '@/components/ui/badgeVariants';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="relative overflow-hidden py-36">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="
            absolute -top-40 -right-40 size-96 rounded-full bg-blue-500
            blur-[120px]
          "
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="
            absolute -bottom-40 -left-40 size-96 rounded-full bg-cyan-400
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className={badgeVariants()}>
            🤖 Atendente Virtual com IA
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            text-center text-4xl font-extrabold tracking-tight
            sm:text-5xl
            lg:text-6xl
          "
        >
          {t.rich('title', {
            important: chunks => (
              <span className="
                bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500
                bg-clip-text text-transparent
              "
              >
                {chunks}
              </span>
            ),
          })}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground
          "
        >
          {t('description')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="
            mt-10 flex flex-col items-center justify-center gap-4
            sm:flex-row
          "
        >
          <Link
            className={buttonVariants({ size: 'lg', className: 'shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]' })}
            href="/#pricing"
          >
            {t('primary_button')}
            <svg className="ml-1 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>

          <a
            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'transition-all hover:scale-[1.02]' })}
            href="#features"
          >
            {t('secondary_button')}
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="
            mt-12 flex flex-wrap items-center justify-center gap-6 text-sm
            text-muted-foreground
          "
        >
          <div className="flex items-center gap-2">
            <svg className="size-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Garantia 30 dias
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Sem contrato
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Suporte dedicado
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

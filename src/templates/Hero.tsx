'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { badgeVariants } from '@/components/ui/badgeVariants';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { CalendarCheck, Users, BarChart3, Bot, Shield, Clock, Star } from 'lucide-react';

const techIcons = [
  { name: 'Convex', abbr: 'Cx', color: 'bg-emerald-500' },
  { name: 'Groq AI', abbr: 'Gq', color: 'bg-orange-500' },
  { name: 'Meta API', abbr: 'MA', color: 'bg-blue-600' },
  { name: 'Mercado Pago', abbr: 'MP', color: 'bg-sky-500' },
  { name: 'Next.js', abbr: 'Nx', color: 'bg-gray-800' },
  { name: 'Vercel', abbr: 'Vc', color: 'bg-black' },
];

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute -top-40 -right-40 size-[500px] rounded-full bg-blue-500 blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-cyan-400 blur-[150px]"
        />
      </div>

      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
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
          className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {t.rich('title', {
            important: chunks => (
              <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
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
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground"
        >
          {t('description')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          {[
            { icon: Shield, text: 'Garantia 30 dias' },
            { icon: Clock, text: 'Sem contrato' },
            { icon: Star, text: 'Suporte dedicado' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="size-4 text-blue-500" />
              {item.text}
            </div>
          ))}
        </motion.div>

        {/* Tech Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {techIcons.map(tech => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5 shadow-sm transition-all hover:shadow-md hover:border-blue-500/30"
            >
              <div className={`flex size-8 items-center justify-center rounded-lg ${tech.color} text-xs font-bold text-white`}>
                {tech.abbr}
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Device Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* Laptop mockup */}
          <div className="relative mx-auto max-w-4xl">
            {/* Laptop screen */}
            <div className="overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl shadow-blue-500/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-400" />
                  <div className="size-3 rounded-full bg-yellow-400" />
                  <div className="size-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                  app.atendia.com.br/dashboard
                </div>
              </div>
              {/* Dashboard content */}
              <div className="grid grid-cols-4 gap-3 p-4">
                {[
                  { label: 'Agendamentos', value: '12', icon: CalendarCheck, color: 'text-blue-500' },
                  { label: 'Clientes', value: '248', icon: Users, color: 'text-cyan-500' },
                  { label: 'Faturamento', value: 'R$ 18k', icon: BarChart3, color: 'text-green-500' },
                  { label: 'IA Ativa', value: 'Online', icon: Bot, color: 'text-purple-500' },
                ].map(stat => (
                  <div key={stat.label} className="rounded-xl border border-border bg-background p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                      <stat.icon className={`size-3.5 ${stat.color}`} />
                    </div>
                    <p className="mt-1.5 text-lg font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Schedule mini grid */}
              <div className="border-t border-border p-4">
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 14 }, (_, i) => {
                    const filled = [0, 2, 4, 6, 9, 11, 13].includes(i);
                    return (
                      <div
                        key={i}
                        className={`h-8 rounded-md text-[9px] font-medium flex items-center justify-center ${
                          filled ? 'bg-blue-500/15 text-blue-600' : 'bg-muted/30 text-muted-foreground/50'
                        }`}
                      >
                        {filled ? '●' : '○'}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="mx-auto h-3 w-full rounded-b-2xl bg-gradient-to-b from-border to-muted/50" />
            <div className="mx-auto h-1 w-1/3 rounded-b-lg bg-border" />
          </div>

          {/* Phone mockup (overlapping) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -right-4 bottom-0 hidden lg:block"
          >
            <div className="w-48 overflow-hidden rounded-[1.5rem] border-4 border-gray-800 bg-white shadow-2xl">
              <div className="bg-gray-100 px-3 py-1.5 text-[8px] text-gray-500">9:41</div>
              <div className="p-3">
                <div className="mb-2 text-center">
                  <div className="mx-auto mb-1 flex size-7 items-center justify-center rounded-lg bg-blue-500 text-white">
                    <Bot className="size-3.5" />
                  </div>
                  <p className="text-[9px] font-bold text-gray-800">Salão Beleza</p>
                </div>
                {['Corte R$ 85', 'Manicure R$ 45'].map(s => (
                  <div key={s} className="mb-1.5 flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 p-2">
                    <span className="text-[8px] font-medium text-gray-700">{s}</span>
                    <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[7px] font-bold text-white">Agendar</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Glow behind mockup */}
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 blur-2xl" />
        </motion.div>
      </div>
    </Section>
  );
};

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { CalendarCheck, Users, BarChart3, Bot, Shield, Clock, Star } from 'lucide-react';
import { WhatsAppIcon, GoogleGeminiIcon, MercadoPagoIcon, CalendarIcon, CRMIcon, AIIcon } from '@/components/BrandIcons';

const techIcons = [
  { name: 'Agendamento', Icon: CalendarIcon, color: 'text-blue-400' },
  { name: 'Inteligência Artificial', Icon: AIIcon, color: 'text-purple-400' },
  { name: 'WhatsApp API', Icon: WhatsAppIcon, color: 'text-[#25D366]' },
  { name: 'Pagamentos', Icon: MercadoPagoIcon, color: 'text-[#009EE3]' },
  { name: 'IA Gemini', Icon: GoogleGeminiIcon, color: 'text-orange-400' },
  { name: 'CRM', Icon: CRMIcon, color: 'text-cyan-400' },
];

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="relative overflow-hidden py-20 sm:py-28 bg-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute -top-40 -right-40 size-[500px] rounded-full bg-[#2dd4bf] blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-blue-500 blur-[150px]"
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
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2dd4bf]/10 px-4 py-1.5 text-sm font-medium text-[#2dd4bf]">
            Solução Completa para Agendamento
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Transforme seu atendimento em uma experiência mais{' '}
          <span className="bg-linear-to-r from-[#2dd4bf] to-blue-400 bg-clip-text text-transparent">
            profissional, organizada e inteligente
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-400"
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
            className="
              inline-flex items-center gap-2 rounded-full bg-[#2dd4bf] px-8 py-4
              text-lg font-bold text-black shadow-lg shadow-[#2dd4bf]/25
              transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[#2dd4bf]/30
            "
            href="/#pricing"
          >
            {t('primary_button')}
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>

          <a
            className="
              inline-flex items-center gap-2 rounded-full border border-white/20
              bg-transparent px-8 py-4 text-lg font-medium text-white
              transition-all hover:bg-white/10
            "
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
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
        >
          {[
            { icon: Shield, text: 'Garantia 30 dias' },
            { icon: Clock, text: 'Sem contrato' },
            { icon: Star, text: 'Suporte dedicado' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="size-4 text-[#2dd4bf]" />
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
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 shadow-sm transition-all hover:border-[#2dd4bf]/30 hover:bg-white/10"
            >
              <tech.Icon className={`size-5 ${tech.color}`} />
              <span className="text-xs font-medium text-gray-400 group-hover:text-white">{tech.name}</span>
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
            <div className="overflow-hidden rounded-t-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-[#2dd4bf]/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#111] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500" />
                  <div className="size-3 rounded-full bg-yellow-500" />
                  <div className="size-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-[#1a1a1a] px-3 py-1 text-xs text-gray-500">
                  app.atendia.com.br/dashboard
                </div>
              </div>
              {/* Dashboard content */}
              <div className="grid grid-cols-4 gap-3 p-4">
                {[
                  { label: 'Agendamentos', value: '12', icon: CalendarCheck, color: 'text-[#2dd4bf]' },
                  { label: 'Clientes', value: '248', icon: Users, color: 'text-blue-400' },
                  { label: 'Faturamento', value: 'R$ 18k', icon: BarChart3, color: 'text-green-400' },
                  { label: 'IA Ativa', value: 'Online', icon: Bot, color: 'text-purple-400' },
                ].map(stat => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-[#111] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                      <stat.icon className={`size-3.5 ${stat.color}`} />
                    </div>
                    <p className="mt-1.5 text-lg font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Schedule mini grid */}
              <div className="border-t border-white/10 p-4">
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 14 }, (_, i) => {
                    const filled = [0, 2, 4, 6, 9, 11, 13].includes(i);
                    return (
                      <div
                        key={i}
                        className={`h-8 rounded-md text-[9px] font-medium flex items-center justify-center ${
                          filled ? 'bg-[#2dd4bf]/15 text-[#2dd4bf]' : 'bg-[#1a1a1a] text-gray-600'
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
            <div className="mx-auto h-3 w-full rounded-b-2xl bg-gradient-to-b from-white/10 to-[#111]" />
            <div className="mx-auto h-1 w-1/3 rounded-b-lg bg-white/10" />
          </div>

          {/* Phone mockup (overlapping) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -right-4 bottom-0 hidden lg:block"
          >
            <div className="w-48 overflow-hidden rounded-[1.5rem] border-4 border-gray-800 bg-[#111] shadow-2xl">
              <div className="bg-[#1a1a1a] px-3 py-1.5 text-[8px] text-gray-500">9:41</div>
              <div className="p-3">
                <div className="mb-2 text-center">
                  <div className="mx-auto mb-1 flex size-7 items-center justify-center rounded-lg bg-[#2dd4bf] text-black">
                    <Bot className="size-3.5" />
                  </div>
                  <p className="text-[9px] font-bold text-white">Salão Beleza</p>
                </div>
                {['Corte R$ 85', 'Manicure R$ 45'].map(s => (
                  <div key={s} className="mb-1.5 flex items-center justify-between rounded-md border border-white/10 bg-[#1a1a1a] p-2">
                    <span className="text-[8px] font-medium text-gray-300">{s}</span>
                    <span className="rounded bg-[#2dd4bf] px-1.5 py-0.5 text-[7px] font-bold text-black">Agendar</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Glow behind mockup */}
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-linear-to-br from-[#2dd4bf]/10 to-blue-500/10 blur-2xl" />
        </motion.div>
      </div>
    </Section>
  );
};

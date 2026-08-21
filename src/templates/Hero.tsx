'use client';

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
    <Section className="relative overflow-hidden py-16 sm:py-24 bg-black">
      {/* Background - static, no animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-[#2dd4bf]/10 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-blue-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2dd4bf]/10 px-4 py-1.5 text-xs font-medium text-[#2dd4bf] sm:text-sm">
            Solução Completa para Agendamento
          </span>
        </div>

        {/* Title */}
        <h1 className="px-4 text-center text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transforme seu atendimento em uma experiência mais{' '}
          <span className="bg-linear-to-r from-[#2dd4bf] to-blue-400 bg-clip-text text-transparent">
            profissional, organizada e inteligente
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl px-4 text-center text-base text-gray-400 sm:mt-6 sm:text-lg">
          {t('description')}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            className="
              inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2dd4bf] px-8 py-3.5
              text-base font-bold text-black shadow-lg shadow-[#2dd4bf]/25
              transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[#2dd4bf]/30
              sm:w-auto sm:py-4 sm:text-lg
            "
            href="/#pricing"
          >
            {t('primary_button')}
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>

          <Link
            className="
              inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20
              bg-transparent px-8 py-3.5 text-base font-medium text-white
              transition-all hover:bg-white/10
              sm:w-auto sm:py-4 sm:text-lg
            "
            href="/empresa"
          >
            {t('secondary_button')}
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 px-4 text-xs text-gray-400 sm:gap-6 sm:text-sm">
          {[
            { icon: Shield, text: 'Garantia 30 dias' },
            { icon: Clock, text: 'Sem contrato' },
            { icon: Star, text: 'Suporte dedicado' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-1.5">
              <item.icon className="size-3.5 text-[#2dd4bf] sm:size-4" />
              {item.text}
            </div>
          ))}
        </div>

        {/* Tech Icons Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 px-4 sm:mt-12 sm:gap-4">
          {techIcons.map(tech => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-sm transition-all hover:border-[#2dd4bf]/30 hover:bg-white/10 sm:px-5 sm:py-2.5"
            >
              <tech.Icon className={`size-4 ${tech.color} sm:size-5`} />
              <span className="text-[10px] font-medium text-gray-400 group-hover:text-white sm:text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Device Mockup - simplified */}
        <div className="relative mx-auto mt-12 max-w-4xl px-4 sm:mt-16">
          {/* Laptop mockup */}
          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-t-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-[#2dd4bf]/10 sm:rounded-t-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#111] px-3 py-2 sm:px-4 sm:py-3">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="size-2.5 rounded-full bg-red-500 sm:size-3" />
                  <div className="size-2.5 rounded-full bg-yellow-500 sm:size-3" />
                  <div className="size-2.5 rounded-full bg-green-500 sm:size-3" />
                </div>
                <div className="ml-2 flex-1 rounded-md bg-[#1a1a1a] px-2 py-0.5 text-[9px] text-gray-500 sm:ml-4 sm:px-3 sm:py-1 sm:text-xs">
                  app.atendia.com.br/dashboard
                </div>
              </div>
              {/* Dashboard content */}
              <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4 sm:gap-3 sm:p-4">
                {[
                  { label: 'Agendamentos', value: '12', icon: CalendarCheck, color: 'text-[#2dd4bf]' },
                  { label: 'Clientes', value: '248', icon: Users, color: 'text-blue-400' },
                  { label: 'Faturamento', value: 'R$ 18k', icon: BarChart3, color: 'text-green-400' },
                  { label: 'IA Ativa', value: 'Online', icon: Bot, color: 'text-purple-400' },
                ].map(stat => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-[#111] p-2 sm:rounded-xl sm:p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[8px] text-gray-500 sm:text-[10px]">{stat.label}</p>
                      <stat.icon className={`size-3 ${stat.color} sm:size-3.5`} />
                    </div>
                    <p className="mt-1 text-sm font-bold text-white sm:mt-1.5 sm:text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Schedule grid */}
              <div className="border-t border-white/10 p-2 sm:p-4">
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                  {Array.from({ length: 14 }, (_, i) => {
                    const filled = [0, 2, 4, 6, 9, 11, 13].includes(i);
                    return (
                      <div
                        key={i}
                        className={`h-5 rounded text-[7px] font-medium flex items-center justify-center sm:h-8 sm:rounded-md sm:text-[9px] ${
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
            <div className="mx-auto h-2 w-full rounded-b-xl bg-gradient-to-b from-white/10 to-[#111] sm:h-3 sm:rounded-b-2xl" />
            <div className="mx-auto h-0.5 w-1/3 rounded-b-lg bg-white/10 sm:h-1" />
          </div>

          {/* Phone mockup */}
          <div className="absolute -right-2 bottom-0 hidden sm:block lg:-right-4">
            <div className="w-36 overflow-hidden rounded-2xl border-4 border-gray-800 bg-[#111] shadow-2xl sm:w-48 sm:rounded-[1.5rem]">
              <div className="bg-[#1a1a1a] px-2 py-1 text-[7px] text-gray-500 sm:px-3 sm:py-1.5 sm:text-[8px]">9:41</div>
              <div className="p-2 sm:p-3">
                <div className="mb-2 text-center">
                  <div className="mx-auto mb-1 flex size-6 items-center justify-center rounded-lg bg-[#2dd4bf] text-black sm:size-7">
                    <Bot className="size-3 sm:size-3.5" />
                  </div>
                  <p className="text-[8px] font-bold text-white sm:text-[9px]">Salão Beleza</p>
                </div>
                {['Corte R$ 85', 'Manicure R$ 45'].map(s => (
                  <div key={s} className="mb-1.5 flex items-center justify-between rounded-md border border-white/10 bg-[#1a1a1a] p-1.5 sm:p-2">
                    <span className="text-[7px] font-medium text-gray-300 sm:text-[8px]">{s}</span>
                    <span className="rounded bg-[#2dd4bf] px-1 py-0.5 text-[6px] font-bold text-black sm:px-1.5 sm:py-0.5 sm:text-[7px]">Agendar</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow behind mockup */}
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-linear-to-br from-[#2dd4bf]/8 to-blue-500/8 blur-2xl" />
        </div>
      </div>
    </Section>
  );
};

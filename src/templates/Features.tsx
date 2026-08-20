'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Users, Bot, MessageSquare, BarChart3, Settings, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

const featuresData = [
  {
    icon: CalendarCheck,
    color: 'from-blue-500 to-blue-600',
    titleKey: 'feature1_title' as const,
    descKey: 'feature1_description' as const,
    mockup: (
      <div className="rounded-xl border border-border bg-background p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-foreground">Agenda</span>
          <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[8px] font-medium text-blue-600">12 Hoje</span>
        </div>
        <div className="space-y-1.5">
          {['09:00 Corte - Maria', '10:30 Manicure - Ana', '14:00 Escovação - Lia'].map(a => (
            <div key={a} className="flex items-center gap-2 rounded-lg bg-muted/50 px-2 py-1.5">
              <div className="size-1.5 rounded-full bg-blue-500" />
              <span className="text-[9px] text-muted-foreground">{a}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    color: 'from-cyan-500 to-cyan-600',
    titleKey: 'feature2_title' as const,
    descKey: 'feature2_description' as const,
    mockup: (
      <div className="rounded-xl border border-border bg-background p-3">
        <div className="mb-2 text-[10px] font-semibold text-foreground">Clientes</div>
        <div className="space-y-1.5">
          {[
            { name: 'Maria Silva', visits: '12 visitas', color: 'bg-pink-500' },
            { name: 'Ana Santos', visits: '8 visitas', color: 'bg-cyan-500' },
            { name: 'Carlos Lima', visits: '5 visitas', color: 'bg-green-500' },
          ].map(c => (
            <div key={c.name} className="flex items-center gap-2 rounded-lg bg-muted/50 px-2 py-1.5">
              <div className={`size-5 rounded-full ${c.color} flex items-center justify-center text-[8px] font-bold text-white`}>
                {c.name[0]}
              </div>
              <div>
                <p className="text-[9px] font-medium text-foreground">{c.name}</p>
                <p className="text-[7px] text-muted-foreground">{c.visits}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Bot,
    color: 'from-purple-500 to-indigo-600',
    titleKey: 'feature3_title' as const,
    descKey: 'feature3_description' as const,
    mockup: (
      <div className="rounded-xl border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <div className="flex size-5 items-center justify-center rounded-full bg-purple-500 text-white">
            <Bot className="size-3" />
          </div>
          <span className="text-[10px] font-semibold text-foreground">Assistente IA</span>
          <span className="size-1.5 rounded-full bg-green-500" />
        </div>
        <div className="space-y-1.5">
          <div className="ml-4 rounded-lg rounded-tl-none bg-purple-500 px-2 py-1 text-[8px] text-white">
            Olá! Posso ajudar? 👋
          </div>
          <div className="mr-4 rounded-lg rounded-tr-none bg-muted px-2 py-1 text-[8px]">
            Quero agendar corte
          </div>
          <div className="ml-4 rounded-lg rounded-tl-none bg-purple-500 px-2 py-1 text-[8px] text-white">
            Temos 10h e 14h 📅
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-600',
    titleKey: 'feature4_title' as const,
    descKey: 'feature4_description' as const,
    mockup: (
      <div className="rounded-xl border border-border bg-background p-3">
        <div className="mb-2 text-[10px] font-semibold text-foreground">Automações</div>
        <div className="space-y-1.5">
          {[
            { text: 'Confirmação automática', status: '✓ Enviado', color: 'text-green-500' },
            { text: 'Lembrete 24h antes', status: '✓ Agendado', color: 'text-blue-500' },
            { text: 'Avaliação pós-atendimento', status: '⏳ Pendente', color: 'text-yellow-500' },
          ].map(a => (
            <div key={a.text} className="flex items-center justify-between rounded-lg bg-muted/50 px-2 py-1.5">
              <span className="text-[9px] text-muted-foreground">{a.text}</span>
              <span className={`text-[8px] font-medium ${a.color}`}>{a.status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    color: 'from-orange-500 to-amber-500',
    titleKey: 'feature5_title' as const,
    descKey: 'feature5_description' as const,
    mockup: (
      <div className="rounded-xl border border-border bg-background p-3">
        <div className="mb-2 text-[10px] font-semibold text-foreground">Relatórios</div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Receita', value: 'R$ 8.4k', trend: '+12%' },
            { label: 'Agendamentos', value: '156', trend: '+8%' },
            { label: 'Clientes', value: '89', trend: '+15%' },
            { label: 'Presença', value: '94%', trend: '+3%' },
          ].map(r => (
            <div key={r.label} className="rounded-lg bg-muted/50 p-2">
              <p className="text-[7px] text-muted-foreground">{r.label}</p>
              <p className="text-[11px] font-bold text-foreground">{r.value}</p>
              <p className="text-[7px] font-medium text-green-500">{r.trend}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Settings,
    color: 'from-rose-500 to-pink-500',
    titleKey: 'feature6_title' as const,
    descKey: 'feature6_description' as const,
    mockup: (
      <div className="rounded-xl border border-border bg-background p-3">
        <div className="mb-2 text-[10px] font-semibold text-foreground">Configuração</div>
        <div className="space-y-1.5">
          {[
            { label: 'Identidade visual', check: true },
            { label: 'Horários de funcionamento', check: true },
            { label: 'Serviços cadastrados', check: true },
            { label: 'Notificações ativas', check: true },
          ].map(c => (
            <div key={c.label} className="flex items-center gap-2 rounded-lg bg-muted/50 px-2 py-1.5">
              <CheckCircle2 className="size-3 text-green-500" />
              <span className="text-[9px] text-muted-foreground">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuresData.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.titleKey}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Mockup preview */}
                <div className="border-b border-border bg-muted/20 p-4">
                  {feat.mockup}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className={`inline-flex size-10 items-center justify-center rounded-xl bg-linear-to-br ${feat.color} text-white shadow-lg`}>
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{t(feat.titleKey)}</h3>
                  <p className="mt-1.5 text-sm/relaxed text-muted-foreground">
                    {t(feat.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </Background>
  );
};

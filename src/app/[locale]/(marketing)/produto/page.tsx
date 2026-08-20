'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
  MessageSquare,
  Monitor,
  Settings,
  Users,
  Zap,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    icon: CalendarCheck,
    title: 'Agendamento Online',
    desc: 'Seus clientes agendam pelo celular a qualquer hora, sem ligações.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'CRM Completo',
    desc: 'Histórico de cada cliente, preferências e dados organizados.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Bot,
    title: 'Assistente com IA',
    desc: 'IA configurada para seu negócio, respondendo e automatizando.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: MessageSquare,
    title: 'Automação WhatsApp',
    desc: 'Confirmações, lembretes e respostas automáticas.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: BarChart3,
    title: 'Relatórios',
    desc: 'Acompanhe faturamento, clientes e desempenho.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Settings,
    title: 'Painel Administrativo',
    desc: 'Controle total do seu negócio em um só lugar.',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function ProdutoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="
            absolute -top-40 -right-40 size-96 rounded-full bg-blue-500/10
            blur-[120px]
          "
          />
          <div className="
            absolute -bottom-40 -left-40 size-96 rounded-full bg-cyan-400/10
            blur-[120px]
          "
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10
              px-4 py-2 text-sm font-medium text-blue-600
            "
          >
            <Monitor className="size-4" />
            Conheça o Sistema
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              text-4xl font-extrabold tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Seu
            {' '}
            <span className="
              bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text
              text-transparent
            "
            >
              Sistema Completo
            </span>
            {' '}
            de Agendamento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Uma plataforma profissional que transforma a maneira como você gerencia agendamentos, clientes e atendimentos.
          </motion.p>
        </div>
      </Section>

      {/* Dashboard Mockup */}
      <Section className="py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-5xl"
        >
          <div className="
            relative overflow-hidden rounded-2xl border border-border bg-card
            shadow-2xl shadow-blue-500/10
          "
          >
            {/* Browser bar */}
            <div className="
              flex items-center gap-2 border-b border-border bg-muted/50 px-4
              py-3
            "
            >
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="
                ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs
                text-muted-foreground
              "
              >
                app.atendia.com.br/dashboard
              </div>
            </div>
            {/* Dashboard content */}
            <div className="
              grid grid-cols-1 gap-4 p-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
            >
              {[
                { label: 'Agendamentos Hoje', value: '12', icon: CalendarCheck, color: 'text-blue-500' },
                { label: 'Clientes Ativos', value: '248', icon: Users, color: 'text-cyan-500' },
                { label: 'Faturamento Mensal', value: 'R$ 18.450', icon: BarChart3, color: 'text-green-500' },
                { label: 'Taxa de Presença', value: '94%', icon: CheckCircle2, color: 'text-purple-500' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <stat.icon className={`
                      size-4
                      ${stat.color}
                    `}
                    />
                  </div>
                  <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
            {/* Schedule grid */}
            <div className="border-t border-border p-6">
              <h3 className="mb-4 text-sm font-semibold">Agenda da Semana</h3>
              <div className="grid grid-cols-7 gap-2">
                {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(day => (
                  <div
                    key={day}
                    className="
                      text-center text-xs font-medium text-muted-foreground
                    "
                  >
                    {day}
                  </div>
                ))}
                {Array.from({ length: 28 }, (_, i) => {
                  const hasAppointments = [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24].includes(i);
                  const isFull = [3, 10, 17, 24].includes(i);
                  return (
                    <div
                      key={i}
                      className={`
                        flex h-12 items-center justify-center rounded-lg text-xs
                        font-medium transition-all
                        ${
                    isFull
                      ? `bg-blue-500 text-white shadow-sm shadow-blue-500/25`
                      : hasAppointments
                        ? 'bg-blue-500/10 text-blue-600'
                        : 'bg-muted/50 text-muted-foreground'
                    }
                      `}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Features Grid */}
      <Section className="py-20">
        <div className="mb-12 text-center">
          <h2 className="
            text-3xl font-bold
            sm:text-4xl
          "
          >
            Recursos do
            {' '}
            <span className="
              bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text
              text-transparent
            "
            >
              Sistema
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tudo que seu negócio precisa para profissionalizar o atendimento.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map(f => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="
                group rounded-2xl border border-border bg-card p-6 shadow-sm
                transition-all
                hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10
              "
            >
              <div className={`
                mb-4 flex size-12 items-center justify-center rounded-xl
                bg-linear-to-br
                ${f.color}
                text-white shadow-lg
              `}
              >
                <f.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Mobile Preview */}
      <Section className="py-20">
        <div className="
          grid grid-cols-1 items-center gap-12
          lg:grid-cols-2
        "
        >
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="
              text-3xl font-bold
              sm:text-4xl
            "
            >
              Seus clientes agendam pelo
              {' '}
              <span className="
                bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text
                text-transparent
              "
              >
                celular
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Seus clientes acessam uma página profissional pelo celular e agendam horários de forma simples e rápida, sem precisar baixar aplicativo.
            </p>
            <ul className="mt-6 space-y-3">
              {['Página profissional com a marca do negócio', 'Agendamento em poucos toques', 'Confirmação automática por WhatsApp', 'Lembretes antes do horário'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex justify-center"
          >
            {/* Phone mockup */}
            <div className="relative">
              <div className="
                w-72 overflow-hidden rounded-[2.5rem] border-8 border-gray-800
                bg-white shadow-2xl
              "
              >
                {/* Status bar */}
                <div className="
                  flex items-center justify-between bg-gray-100 px-6 py-2
                  text-xs text-gray-500
                "
                >
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="h-3 w-4 rounded-sm bg-gray-400" />
                    <div className="h-3 w-4 rounded-sm bg-gray-400" />
                  </div>
                </div>
                {/* App content */}
                <div className="p-4">
                  <div className="mb-4 text-center">
                    <div className="
                      mx-auto mb-2 flex size-10 items-center justify-center
                      rounded-xl bg-blue-500 text-white
                    "
                    >
                      <Bot className="size-5" />
                    </div>
                    <p className="text-xs font-bold text-gray-800">Salão Beleza</p>
                    <p className="text-[10px] text-gray-400">Agende seu horário</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Corte Feminino', time: '45 min', price: 'R$ 85' },
                      { name: 'Manicure', time: '30 min', price: 'R$ 45' },
                      { name: 'Escovação', time: '40 min', price: 'R$ 70' },
                    ].map(s => (
                      <div
                        key={s.name}
                        className="
                          flex items-center justify-between rounded-lg border
                          border-gray-100 bg-gray-50 p-3
                        "
                      >
                        <div>
                          <p className="text-xs font-semibold text-gray-800">{s.name}</p>
                          <p className="text-[10px] text-gray-400">{s.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-blue-500">{s.price}</p>
                          <button className="
                            mt-1 rounded-md bg-blue-500 px-2 py-0.5 text-[10px]
                            font-medium text-white
                          "
                          >
                            Agendar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-600">📅 Horários disponíveis</p>
                    <div className="mt-1 flex justify-center gap-1">
                      {['09:00', '10:30', '14:00', '15:30'].map(t => (
                        <span
                          key={t}
                          className="
                            rounded-sm bg-blue-500 px-1.5 py-0.5 text-[9px]
                            font-medium text-white
                          "
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="
                pointer-events-none absolute -inset-4 rounded-[3rem]
                bg-linear-to-br from-blue-500/10 to-cyan-500/10 blur-xl
              "
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* AI Section */}
      <Section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="
            mx-auto max-w-4xl rounded-2xl border border-blue-500/20
            bg-linear-to-br from-blue-500/5 to-cyan-500/5 p-8
            sm:p-12
          "
        >
          <div className="
            grid grid-cols-1 items-center gap-8
            lg:grid-cols-2
          "
          >
            <div>
              <div className="
                mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10
                px-3 py-1 text-sm font-medium text-blue-600
              "
              >
                <Bot className="size-4" />
                Inteligência Artificial
              </div>
              <h2 className="text-3xl font-bold">
                IA que trabalha para seu negócio
              </h2>
              <p className="mt-4 text-muted-foreground">
                No plano Premium, sua IA é treinada com as informações do seu negócio. Ela responde clientes, agenda horários e automatiza tarefas 24h por dia.
              </p>
              <ul className="mt-6 space-y-2">
                {['Responde dúvidas dos clientes', 'Agenda automaticamente', 'Envia lembretes', 'Aprende sobre seu negócio'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Zap className="size-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="
                w-full max-w-xs rounded-2xl border border-border bg-card p-4
                shadow-xl
              "
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="
                    flex size-8 items-center justify-center rounded-full
                    bg-blue-500 text-white
                  "
                  >
                    <Bot className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Assistente AtendIA</p>
                    <p className="text-[10px] text-green-500">● Online</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="
                    ml-8 rounded-lg rounded-tl-none bg-blue-500 p-2.5 text-xs
                    text-white
                  "
                  >
                    Olá! 👋 Posso ajudar com agendamentos e informações!
                  </div>
                  <div className="
                    mr-8 rounded-lg rounded-tr-none bg-muted p-2.5 text-xs
                  "
                  >
                    Quero agendar corte para sábado
                  </div>
                  <div className="
                    ml-8 rounded-lg rounded-tl-none bg-blue-500 p-2.5 text-xs
                    text-white
                  "
                  >
                    Perfeito! Temos horário às 10h e 14h. Qual prefere? 📅
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* How it looks */}
      <Section className="py-20">
        <div className="mb-12 text-center">
          <h2 className="
            text-3xl font-bold
            sm:text-4xl
          "
          >
            Exemplo de
            {' '}
            <span className="
              bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text
              text-transparent
            "
            >
              Página do Cliente
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Cada negócio recebe uma página profissional personalizada com sua identidade visual.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl"
        >
          <div className="
            overflow-hidden rounded-2xl border border-border bg-card shadow-2xl
            shadow-blue-500/10
          "
          >
            {/* Browser bar */}
            <div className="
              flex items-center gap-2 border-b border-border bg-muted/50 px-4
              py-3
            "
            >
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="
                ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs
                text-muted-foreground
              "
              >
                salonbeleza.atendia.com.br
              </div>
            </div>
            {/* Client page content */}
            <div className="p-6">
              <div className="mb-6 text-center">
                <div className="
                  mx-auto mb-3 flex size-16 items-center justify-center
                  rounded-2xl bg-linear-to-br from-pink-400 to-purple-500
                  text-2xl text-white shadow-lg
                "
                >
                  💇
                </div>
                <h3 className="text-xl font-bold">Salão Beleza</h3>
                <p className="text-sm text-muted-foreground">Agende seu horário online</p>
                <div className="
                  mt-2 flex items-center justify-center gap-1 text-xs
                  text-yellow-500
                "
                >
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                  <span className="ml-1 text-muted-foreground">(4.9)</span>
                </div>
              </div>
              <div className="
                grid grid-cols-1 gap-3
                sm:grid-cols-2
              "
              >
                {[
                  { icon: '✂️', name: 'Corte Feminino', price: 'R$ 85', time: '45min' },
                  { icon: '💅', name: 'Manicure', price: 'R$ 45', time: '30min' },
                  { icon: '💆', name: 'Escovação', price: 'R$ 70', time: '40min' },
                  { icon: '🎨', name: 'Coloração', price: 'R$ 150', time: '90min' },
                ].map(s => (
                  <div
                    key={s.name}
                    className="
                      flex items-center justify-between rounded-xl border
                      border-border p-3 transition-all
                      hover:border-blue-500/30 hover:shadow-sm
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <p className="text-sm font-semibold">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-blue-500">{s.price}</p>
                      <button className="
                        mt-1 rounded-lg bg-blue-500 px-3 py-1 text-xs
                        font-medium text-white transition-all
                        hover:bg-blue-600
                      "
                      >
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Pronto para transformar seu negócio?"
          description="Comece hoje e veja a diferença no seu atendimento. Garantia incondicional de 30 dias."
          buttons={(
            <Link
              className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'whitespace-pre-line shadow-lg hover:shadow-xl transition-all' })}
              href="/#pricing"
            >
              Ver Planos
              <svg className="ml-1 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          )}
        />
      </Section>

      <Footer />
    </>
  );
}

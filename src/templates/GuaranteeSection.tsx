'use client';

import { motion } from 'framer-motion';
import { Shield, RotateCcw, Headphones, FileCheck } from 'lucide-react';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';

export const GuaranteeSection = () => (
  <Section className="bg-black">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] shadow-2xl shadow-black/50"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-80 rounded-full bg-[#2dd4bf]/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-60 rounded-full bg-[#2dd4bf]/3 blur-[80px]" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #2dd4bf 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-10 flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row lg:gap-12">
        {/* Professional Badge */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-[#2dd4bf]/10 blur-xl" />

            {/* Shield container */}
            <div className="relative flex size-36 items-center justify-center">
              {/* Shield SVG background */}
              <svg className="absolute inset-0 size-full" viewBox="0 0 144 144" fill="none">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path
                  d="M72 12L24 32v32c0 30.4 20.6 58.7 48 64 27.4-5.3 48-33.6 48-64V32L72 12z"
                  fill="url(#shieldGrad)"
                  stroke="url(#shieldBorder)"
                  strokeWidth="2"
                />
                <path
                  d="M72 20L30 37v27c0 26.8 18.1 51.7 42 56.5 23.9-4.8 42-29.7 42-56.5V37L72 20z"
                  fill="#0a0a0a"
                  stroke="#2dd4bf"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                />
              </svg>

              {/* Content inside shield */}
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-4xl font-black text-white" style={{ textShadow: '0 0 20px rgba(45, 212, 191, 0.3)' }}>
                  30
                </p>
                <p className="mt-0.5 text-[11px] font-bold tracking-[0.2em] text-[#2dd4bf]">
                  DIAS
                </p>
              </div>

              {/* Checkmark badge */}
              <div className="absolute -right-1 -top-1 flex size-9 items-center justify-center rounded-full bg-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/40">
                <Shield className="size-4.5 text-black" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          <p className="mt-3 text-[10px] font-bold tracking-[0.25em] text-[#2dd4bf]/60">
            GARANTIA ESPECIAL
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Teste o AtendIA por 30 Dias
            <br />
            <span className="bg-linear-to-r from-[#2dd4bf] to-cyan-300 bg-clip-text text-transparent">
              Sem Compromisso
            </span>
          </h2>

          <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
            <p className="font-bold text-white">Teste. Use. Aproveite.</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Se você não ficar feliz ao se tornar participante do nosso sistema, nós também não ficaremos.
              Por isso, caso você não fique satisfeito, você pode solicitar reembolso integral em até 30 dias após a compra.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: RotateCcw, text: 'Reembolso integral', desc: 'Sem perguntas' },
              { icon: FileCheck, text: 'Sem burocracia', desc: 'Processo simples' },
              { icon: Headphones, text: 'Suporte dedicado', desc: 'Sempre disponível' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#2dd4bf]/10">
                  <item.icon className="size-4 text-[#2dd4bf]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.text}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <Link
            className="
              inline-flex items-center gap-2 rounded-full bg-[#2dd4bf] px-8 py-4
              text-lg font-bold text-black shadow-lg shadow-[#2dd4bf]/25
              transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[#2dd4bf]/30
            "
            href="/#pricing"
          >
            Quero Fazer Parte
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  </Section>
);

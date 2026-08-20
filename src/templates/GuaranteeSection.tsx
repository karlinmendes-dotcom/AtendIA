'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';

export const GuaranteeSection = () => (
  <Section className="bg-black">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-lg"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-[#2dd4bf]/5 blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row">
        {/* Badge */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="flex size-28 items-center justify-center rounded-full bg-linear-to-br from-gray-700 to-gray-900 shadow-2xl shadow-black/50 ring-4 ring-white/10">
              <div className="text-center text-white">
                <p className="text-3xl font-extrabold">30</p>
                <p className="text-xs font-bold">DIAS</p>
              </div>
            </div>
            <div className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-[#2dd4bf] shadow-lg">
              <Shield className="size-4 text-black" />
            </div>
          </div>
          <p className="mt-3 text-xs font-bold text-gray-500">GARANTIA ESPECIAL</p>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Teste o AtendIA por 30 Dias
            <br />
            <span className="text-[#2dd4bf]">Sem Compromisso</span>
          </h2>

          <div className="mt-4 rounded-xl bg-[#111] p-4">
            <p className="font-semibold text-white">Teste. Use. Aproveite.</p>
            <p className="mt-1 text-sm text-gray-400">
              Se você não ficar feliz ao se tornar participante do nosso sistema, nós também não ficaremos.
              Por isso, caso você não fique satisfeito, você pode solicitar reembolso integral em até 30 dias após a compra.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4 lg:justify-start">
            {['Reembolso integral', 'Sem burocracia', 'Suporte dedicado'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="size-4 text-[#2dd4bf]" />
                {item}
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

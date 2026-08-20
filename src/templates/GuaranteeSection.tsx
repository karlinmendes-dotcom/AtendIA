'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Section } from '@/features/landing/Section';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { Link } from '@/libs/I18nNavigation';

export const GuaranteeSection = () => (
  <Section>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-blue-500/5 blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row">
        {/* Badge */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="flex size-28 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-xl shadow-blue-500/30">
              <div className="text-center text-white">
                <p className="text-3xl font-extrabold">30</p>
                <p className="text-xs font-bold">DIAS</p>
              </div>
            </div>
            <div className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-green-500 shadow-lg">
              <Shield className="size-4 text-white" />
            </div>
          </div>
          <p className="mt-3 text-xs font-bold text-muted-foreground">GARANTIA ESPECIAL</p>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Teste o AtendIA por 30 Dias
            <br />
            <span className="text-blue-500">Sem Compromisso</span>
          </h2>

          <div className="mt-4 rounded-xl bg-muted/50 p-4">
            <p className="font-semibold">Teste. Use. Aproveite.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Se você não ficar feliz ao se tornar participante do nosso sistema, nós também não ficaremos.
              Por isso, caso você não fique satisfeito, você pode solicitar reembolso integral em até 30 dias após a compra.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4 lg:justify-start">
            {['Reembolso integral', 'Sem burocracia', 'Suporte dedicado'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="size-4 text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <Link
            className={buttonVariants({ size: 'lg', className: 'whitespace-nowrap shadow-lg shadow-blue-500/25' })}
            href="/#pricing"
          >
            Quero Fazer Parte →
          </Link>
        </div>
      </div>
    </motion.div>
  </Section>
);

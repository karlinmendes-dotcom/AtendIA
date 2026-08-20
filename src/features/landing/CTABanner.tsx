'use client';

import { motion } from 'framer-motion';

export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
      relative overflow-hidden rounded-2xl px-6 py-12 text-center text-white
      shadow-2xl shadow-blue-500/20
      sm:px-12 sm:py-16
    "
    style={{
      background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 40%, #1E40AF 100%)',
    }}
  >
    {/* Decorative circles */}
    <div className="
      pointer-events-none absolute -top-20 -right-20 size-64 rounded-full
      bg-white/5
    "
    />
    <div className="
      pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full
      bg-white/5
    "
    />

    <div className="relative z-10">
      <div className="
        text-3xl font-bold
        sm:text-4xl
      "
      >
        {props.title}
      </div>

      <div className="mx-auto mt-3 max-w-xl text-lg font-medium text-blue-100">
        {props.description}
      </div>

      <div className="mt-8">{props.buttons}</div>
    </div>
  </motion.div>
);

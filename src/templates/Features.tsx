'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Headphones, Settings, Sparkles, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

const featuresData = [
  { icon: CalendarCheck, color: 'from-blue-500 to-blue-600', titleKey: 'feature1_title' as const, descKey: 'feature1_description' as const },
  { icon: Users, color: 'from-emerald-500 to-emerald-600', titleKey: 'feature2_title' as const, descKey: 'feature2_description' as const },
  { icon: Zap, color: 'from-amber-500 to-orange-500', titleKey: 'feature3_title' as const, descKey: 'feature3_description' as const },
  { icon: Settings, color: 'from-violet-500 to-purple-600', titleKey: 'feature4_title' as const, descKey: 'feature4_description' as const },
  { icon: Headphones, color: 'from-rose-500 to-pink-500', titleKey: 'feature5_title' as const, descKey: 'feature5_description' as const },
  { icon: Sparkles, color: 'from-cyan-500 to-blue-500', titleKey: 'feature6_title' as const, descKey: 'feature6_description' as const },
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
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {featuresData.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.titleKey}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="
                  group relative rounded-2xl border border-border bg-card p-6
                  shadow-sm transition-shadow
                  hover:shadow-lg
                "
              >
                <div className={`
                  inline-flex size-12 items-center justify-center rounded-xl
                  bg-linear-to-br
                  ${feat.color}
                  text-white shadow-lg
                `}
                >
                  <Icon className="size-6" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t(feat.titleKey)}</h3>
                <p className="mt-2 text-sm/relaxed text-muted-foreground">
                  {t(feat.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </Background>
  );
};

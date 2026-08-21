'use client';

import { CalendarCheck, Users, Bot, MessageSquare, BarChart3, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';

const featuresData = [
  {
    icon: CalendarCheck,
    gradient: 'from-blue-600 to-blue-800',
    titleKey: 'feature1_title' as const,
    descKey: 'feature1_description' as const,
  },
  {
    icon: Users,
    gradient: 'from-cyan-500 to-cyan-700',
    titleKey: 'feature2_title' as const,
    descKey: 'feature2_description' as const,
  },
  {
    icon: Bot,
    gradient: 'from-purple-500 to-indigo-700',
    titleKey: 'feature3_title' as const,
    descKey: 'feature3_description' as const,
  },
  {
    icon: MessageSquare,
    gradient: 'from-green-500 to-emerald-700',
    titleKey: 'feature4_title' as const,
    descKey: 'feature4_description' as const,
  },
  {
    icon: BarChart3,
    gradient: 'from-orange-500 to-amber-600',
    titleKey: 'feature5_title' as const,
    descKey: 'feature5_description' as const,
  },
  {
    icon: Settings,
    gradient: 'from-rose-500 to-pink-600',
    titleKey: 'feature6_title' as const,
    descKey: 'feature6_description' as const,
  },
];

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
      className="bg-gray-950 text-white"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {featuresData.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.titleKey}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 sm:p-6"
            >
              {/* Gradient accent top */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${feat.gradient}`} />

              {/* Icon */}
              <div className={`mb-3 inline-flex size-11 items-center justify-center rounded-xl bg-linear-to-br ${feat.gradient} text-white shadow-lg sm:mb-4 sm:size-12`}>
                <Icon className="size-5.5 sm:size-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-white sm:text-lg">{t(feat.titleKey)}</h3>
              <p className="mt-1.5 text-xs/relaxed text-gray-400 sm:mt-2 sm:text-sm/relaxed">
                {t(feat.descKey)}
              </p>

              {/* Hover glow */}
              <div className={`pointer-events-none absolute -bottom-20 -right-20 size-40 rounded-full bg-linear-to-br ${feat.gradient} opacity-0 blur-[60px] transition-opacity group-hover:opacity-20`} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

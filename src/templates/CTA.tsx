'use client';

import { useTranslations } from 'next-intl';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
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
        }
      />
    </Section>
  );
};

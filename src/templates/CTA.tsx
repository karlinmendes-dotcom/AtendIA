'use client';

import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui/buttonVariants';
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
        buttons={(
          <Link
            className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'whitespace-pre-line shadow-lg hover:shadow-xl transition-all' })}
            href="/#pricing"
          >
            {t('button_text')}
            <svg className="ml-1 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        )}
      />
    </Section>
  );
};

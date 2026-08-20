'use client';

import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6 bg-black">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <a
                href="https://wa.me/5527998041197"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-full border border-white/20
                  bg-transparent px-4 py-2 text-sm font-medium text-white
                  transition-all hover:bg-white/10
                "
              >
                Fale Conosco
              </a>
            </li>
            <li>
              <Link
                className="
                  inline-flex items-center gap-2 rounded-full bg-[#2dd4bf] px-5 py-2
                  text-sm font-bold text-black transition-all
                  hover:scale-[1.03] hover:shadow-lg hover:shadow-[#2dd4bf]/25
                "
                href="/#pricing"
              >
                {t('sign_up')}
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="/produto" className="text-gray-400 hover:text-white transition-colors">{t('product')}</Link>
        </li>

        <li>
          <Link href="/empresa" className="text-gray-400 hover:text-white transition-colors">{t('about')}</Link>
        </li>

        <li>
          <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">{t('pricing')}</Link>
        </li>

        <li>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">{t('blog')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};

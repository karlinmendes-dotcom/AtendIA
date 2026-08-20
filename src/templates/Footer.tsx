import { useTranslations } from 'next-intl';
import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';
import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pt-0 pb-16">
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
        iconList={null}
        legalLinks={(
          <>
            <li>
              <Link href="/termos-de-uso">{t('terms_of_service')}</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade">{t('privacy_policy')}</Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="/empresa">{t('company')}</Link>
        </li>

        <li>
          <Link href="/blog">{t('blog')}</Link>
        </li>

        <li>
          <a
            href="https://wa.me/5527998041197"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </CenteredFooter>
    </Section>
  );
};

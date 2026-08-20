import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
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
                className={buttonVariants({ variant: 'outline', size: 'sm' })}
              >
                Fale Conosco
              </a>
            </li>
            <li>
              <Link className={buttonVariants()} href="/#pricing">
                {t('sign_up')}
              </Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="/empresa">{t('about')}</Link>
        </li>

        <li>
          <Link href="/#features">{t('product')}</Link>
        </li>

        <li>
          <Link href="/#pricing">{t('pricing')}</Link>
        </li>

        <li>
          <Link href="/blog">{t('blog')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};

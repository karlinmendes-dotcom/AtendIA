import { useTranslations } from 'next-intl';
import { badgeVariants } from '@/components/ui/badgeVariants';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36">
      <CenteredHero
        banner={(
          <span className={badgeVariants()}>
            🤖 Atendente Virtual com IA
          </span>
        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="
              bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent
            "
            >
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <>
            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="#pricing"
            >
              {t('secondary_button')}
            </a>

            <Link
              className={buttonVariants({ size: 'lg' })}
              href="#pricing"
            >
              {t('primary_button')}
              <svg
                className="ml-1 size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </>
        )}
      />
    </Section>
  );
};

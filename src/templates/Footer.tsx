import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';
import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pt-0 pb-16">
      <footer className="mx-auto max-w-6xl">
        {/* Top section */}
        <div className="
          grid grid-cols-1 gap-10
          md:grid-cols-4
        "
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Soluções digitais de agendamento para pequenos negócios.
            </p>
            <a
              href="https://wa.me/5527998041197"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4 inline-flex items-center gap-2 rounded-lg bg-green-500/10
                px-4 py-2 text-sm font-medium text-green-700 transition
                hover:bg-green-500/20
              "
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {t('product')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href="/empresa"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/empresa"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  Sobre a AtendIA
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {t('blog')}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contato@atendia.com.br"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/termos-de-uso"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {t('terms_of_service')}
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {t('privacy_policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/cancelamento"
                  className="
                    text-sm text-muted-foreground
                    hover:text-foreground
                  "
                >
                  Política de Cancelamento
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="
          mt-12 border-t border-border pt-6 text-center text-sm
          text-muted-foreground
        "
        >
          <p>{t('footer_text', { year: new Date().getFullYear(), name: AppConfig.name })}</p>
        </div>
      </footer>
    </Section>
  );
};

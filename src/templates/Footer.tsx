import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';
import { Logo } from './Logo';
import { WhatsAppIcon, InstagramIcon, MetaIcon } from '@/components/BrandIcons';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pt-0 pb-8 bg-black">
      <footer className="mx-auto max-w-6xl px-4">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-3 text-sm text-gray-500">
              Soluções digitais de agendamento para pequenos negócios.
            </p>
            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.instagram.com/atendia" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-[#E4405F]/30 hover:bg-[#E4405F]/10 hover:text-[#E4405F]">
                <InstagramIcon className="size-4" />
              </a>
              <a href="https://www.facebook.com/atendia" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-[#1877F2]/30 hover:bg-[#1877F2]/10 hover:text-[#1877F2]">
                <MetaIcon className="size-4" />
              </a>
            </div>
            <a
              href="https://wa.me/5527998041197?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20AtendIA"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4 inline-flex items-center gap-2.5 rounded-xl
                bg-[#25D366] px-5 py-3 text-sm font-semibold text-white
                shadow-lg shadow-[#25D366]/25 transition-all
                hover:scale-[1.03] hover:shadow-xl hover:shadow-[#25D366]/30
              "
            >
              <WhatsAppIcon className="size-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/produto" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {t('product')}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/empresa" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Sobre a AtendIA
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <a href="mailto:contato@atendia.com.br" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/termos-de-uso" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {t('terms_of_service')}
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {t('privacy_policy')}
                </Link>
              </li>
              <li>
                <Link href="/cancelamento" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Política de Cancelamento
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          <p>{t('footer_text', { year: new Date().getFullYear(), name: AppConfig.name })}</p>
          <p className="mt-1 text-xs text-gray-600">CNPJ: 00.000.000/0001-00</p>
        </div>
      </footer>
    </Section>
  );
};

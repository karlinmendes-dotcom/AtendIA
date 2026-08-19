import type { LocalePrefixMode } from 'next-intl/routing';
import type { AppLocale } from '@/types/I18n';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';
const locales = [
  {
    id: 'en',
    name: 'English',
  },
  {
    id: 'pt',
    name: 'Português',
  },
] satisfies AppLocale[];

// FIXME: Customize this configuration for your product
/** Centralized application configuration */
export const AppConfig = {
  name: 'AtendIA',
  i18n: {
    locales,
    defaultLocale: 'pt',
    localePrefix,
  },
  email: {
    support: 'contato@atendia.com.br',
  },
} as const;

export const AllLocales = AppConfig.i18n.locales.map(locale => locale.id);

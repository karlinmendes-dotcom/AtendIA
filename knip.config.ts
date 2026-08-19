import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // Files to exclude from Knip analysis
  ignore: [
    'checkly.config.ts',
    'src/components/ui/*',
    'src/libs/DB.ts',
    'src/libs/I18n.ts',
    'src/libs/Logger.ts',
    'src/types/Auth.ts',
    'convex/**',
    'src/features/dashboard/OrganizationMenu.tsx',
  ],
  // Dependencies to ignore during analysis
  ignoreDependencies: [
    '@logtape/logtape',
    '@swc/helpers',
    'mercadopago',
    '@next/bundle-analyzer',
    '@spotlightjs/spotlight',
    'npm-run-all',
  ],

  // Include custom Playwright test file suffixes
  playwright: {
    entry: ['tests/**/*.@(integ|e2e).ts'],
  },
  // Binaries to ignore during analysis
  ignoreBinaries: [
    'production', // False positive raised with dotenv-cli
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
  treatConfigHintsAsErrors: false,
};

export default config;

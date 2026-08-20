import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AIModels } from '@/templates/AIModels';
import { CTA } from '@/templates/CTA';
import { FAQ } from '@/templates/FAQ';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { GuaranteeSection } from '@/templates/GuaranteeSection';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';
import { Pricing } from '@/templates/Pricing';
import { SocialProof } from '@/templates/SocialProof';
import { TechLogos } from '@/components/TechLogos';

type IndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <Hero />
      <TechLogos />
      <SocialProof />
      <Features />
      <AIModels />
      <Pricing />
      <GuaranteeSection />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

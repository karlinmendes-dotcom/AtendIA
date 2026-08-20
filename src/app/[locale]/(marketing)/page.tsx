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
import {
  TechMarquee,
  aiMessagingTechs,
  devCloudTechs,
  businessDesignTechs,
} from '@/components/TechMarquee';

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

      {/* FAIXA 1 - INÍCIO: IA & Mensageria */}
      <TechMarquee
        techs={aiMessagingTechs}
        direction="left"
        speed={45}
        showHeader
        subtitle="INTELIGÊNCIA ARTIFICIAL & COMUNICAÇÃO"
        title={
          <>
            Modelos de IA e canais de{' '}
            <span className="bg-linear-to-r from-[#2dd4bf] to-blue-400 bg-clip-text text-transparent">
              comunicação integrados
            </span>
          </>
        }
        description="Utilizamos as melhores IAs do mercado e integramos com os canais que seus clientes já usam no dia a dia."
      />

      <SocialProof />
      <Features />

      {/* FAIXA 2 - MEIO: Desenvolvimento & Cloud */}
      <TechMarquee
        techs={devCloudTechs}
        direction="right"
        speed={38}
        showHeader
        subtitle="INFRAESTRUTURA & DESENVOLVIMENTO"
        title={
          <>
            Construído com as{' '}
            <span className="bg-linear-to-r from-[#2dd4bf] to-cyan-400 bg-clip-text text-transparent">
              melhores tecnologias
            </span>
          </>
        }
        description="Seu site e sistema são desenvolvidos com as ferramentas mais modernas e seguras do mercado."
      />

      <AIModels />
      <Pricing />
      <GuaranteeSection />

      {/* FAIXA 3 - FINAL: Negócios & Design */}
      <TechMarquee
        techs={businessDesignTechs}
        direction="left"
        speed={42}
        showHeader
        subtitle="NEGÓCIOS, PAGAMENTOS & DESIGN"
        title={
          <>
            Integrado com as{' '}
            <span className="bg-linear-to-r from-[#2dd4bf] to-purple-400 bg-clip-text text-transparent">
              ferramentas do seu negócio
            </span>
          </>
        }
        description="Pagamentos, design, produtividade e redes sociais — tudo conectado para o seu sucesso."
      />

      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

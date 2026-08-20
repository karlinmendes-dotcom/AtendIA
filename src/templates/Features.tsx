import { Calendar, FileText, MessageCircle, Settings, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

const featureIcons = [
  Calendar,
  FileText,
  Users,
  Zap,
  Settings,
  MessageCircle,
];

export const Features = () => {
  const t = useTranslations('Features');

  const features = [
    { title: t('feature1_title'), description: t('feature1_description') },
    { title: t('feature2_title'), description: t('feature2_description') },
    { title: t('feature3_title'), description: t('feature3_description') },
    { title: t('feature4_title'), description: t('feature4_description') },
    { title: t('feature5_title'), description: t('feature5_description') },
    { title: t('feature6_title'), description: t('feature6_description') },
  ];

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="
          grid grid-cols-1 gap-x-3 gap-y-8
          md:grid-cols-3
        "
        >
          {featureIcons.map((Icon, i) => {
            const feature = features[i];
            if (!feature) {
              return null;
            }
            return (
              <FeatureCard
                key={feature.title}
                icon={(
                  <Icon
                    className="size-6 stroke-primary-foreground stroke-2"
                  />
                )}
                title={feature.title}
              >
                {feature.description}
              </FeatureCard>
            );
          })}
        </div>
      </Section>
    </Background>
  );
};

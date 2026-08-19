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

  const featureTitles = [
    t('feature1_title'),
    t('feature2_title'),
    t('feature3_title'),
    t('feature4_title'),
    t('feature5_title'),
    t('feature6_title'),
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
          {featureIcons.map((Icon, i) => (
            <FeatureCard
              key={featureTitles[i] ?? `feature-${i}`}
              icon={(
                <Icon
                  className="size-6 stroke-primary-foreground stroke-2"
                />
              )}
              title={featureTitles[i] ?? ''}
            >
              {t('feature_description')}
            </FeatureCard>
          ))}
        </div>
      </Section>
    </Background>
  );
};

import { Section } from '@/features/landing/Section';

const businessTypes = [
  { icon: '💇', label: 'Salões de Beleza' },
  { icon: '💈', label: 'Barbearias' },
  { icon: '💅', label: 'Nail Designers' },
  { icon: '💆', label: 'Clínicas de Estética' },
  { icon: '🎨', label: 'Tatuadores & Studios' },
  { icon: '💆‍♀️', label: 'Massagistas' },
];

export const SocialProof = () => (
  <Section className="py-12">
    <div className="text-center">
      <p className="text-sm font-semibold text-muted-foreground">
        Ideal para negócios que trabalham com agendamento
      </p>
      <div className="
        mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4
      "
      >
        {businessTypes.map(business => (
          <div
            key={business.label}
            className="
              flex items-center gap-2 text-muted-foreground transition-colors
              hover:text-foreground
            "
          >
            <span className="text-2xl">{business.icon}</span>
            <span className="text-sm font-medium">{business.label}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

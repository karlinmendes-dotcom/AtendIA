import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => {
  return (
    <LogoCloud text="Tecnologias">
      <div className="flex items-center gap-4 text-muted-foreground">
        <span className="text-sm">Convex</span>
        <span className="text-sm">Vercel</span>
        <span className="text-sm">Next.js</span>
      </div>
    </LogoCloud>
  );
};

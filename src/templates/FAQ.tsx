'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Section } from '@/features/landing/Section';

const faqItems = [
  { q: 'question1' as const, a: 'answer1' as const },
  { q: 'question2' as const, a: 'answer2' as const },
  { q: 'question3' as const, a: 'answer3' as const },
  { q: 'question4' as const, a: 'answer4' as const },
  { q: 'question5' as const, a: 'answer5' as const },
  { q: 'question6' as const, a: 'answer6' as const },
];

export const FAQ = () => {
  const t = useTranslations('FAQ');

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Accordion type="multiple" className="w-full space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i + 1}`}
              className="
                rounded-xl border border-border bg-card px-5 shadow-sm
                transition-shadow
                hover:shadow-md
              "
            >
              <AccordionTrigger className="py-4 text-left text-sm font-medium">
                {t(item.q)}
              </AccordionTrigger>
              <AccordionContent className="
                pb-4 text-sm/relaxed text-muted-foreground
              "
              >
                {t(item.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </Section>
  );
};

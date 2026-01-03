import { Section } from '@/components/ui/section/Section';
import { BioHeader } from './BioHeader';
import { BioParagraph } from './BioParagraph';
import { ContactButton } from './ContactButton';

export function BioSection() {
  return (
    <Section className="pb-8">
      <BioHeader />
      <BioParagraph />
      <ContactButton />
    </Section>
  );
}

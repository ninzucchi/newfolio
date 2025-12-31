import { Text } from '../../components/ui/Text';
import { Section } from '../../components/ui/Section';
import { TextLink } from '../../components/ui/TextLink';
import { GridColumnMain } from '../../components/ui/Grid';
import { Avatar, AvatarImage } from '../../components/ui/avatar';
import avatarImage from '../../assets/images/avatar.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { SocialLinks } from '../../components/ui/SocialLinks';

export function BioSection() {
  return (
    <Section>
      <Header />
      <Bio />
      <ContactButton />
    </Section>
  );
}

function Header() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar className="w-11 h-11">
        <AvatarImage src={avatarImage} alt="Nick Inzucchi" />
      </Avatar>
      <GridColumnMain className="flex-1">
        <Text.B1>Nick Inzucchi</Text.B1>
        <Text.B4 className="text-fg-secondary">Designer, engineer, product generalist</Text.B4>
      </GridColumnMain>
      <SocialLinks />
    </div>
  );
}

function Bio() {
  return (
    <div className="flex flex-col gap-4 pt-4 pb-4">
      <Text.B3>
        I'm a product design lead and design engineer at{' '}
        <TextLink newTab href="https://substack.com" className="underline">
          Substack
        </TextLink>
        , where I work on core publishing, social, and platform features.
      </Text.B3>
      <Text.B3>
        Previously, I built integrity and safety features at{' '}
        <TextLink newTab href="https://meta.com" className="underline">
          Meta
        </TextLink>{' '}
        including tools for elections, preventing abuse, and responding to global security threats.
      </Text.B3>
      <Text.B3>
        Before that, I was an interaction designer at{' '}
        <TextLink newTab href="https://ideo.com" className="underline">
          IDEO
        </TextLink>
        , working with teams at Google, Ford, Bayer, and American Express to build best-in-class
        digital products.
      </Text.B3>
      <Text.B3>Based in San Francisco.</Text.B3>
    </div>
  );
}

function ContactButton() {
  return (
    <a href="mailto:ninzucchi@gmail.com" className="self-start display-contents">
      <Button>
        Reach out <ArrowRightIcon size={16} />{' '}
      </Button>
    </a>
  );
}

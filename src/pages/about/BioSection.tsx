import { Text } from '../../components/ui/Text';
import { Section } from '../../components/ui/Section';
import { TextLink } from '../../components/ui/TextLink';
import { GridColumnMain } from '../../components/ui/Grid';
import { Avatar, AvatarImage } from '../../components/ui/avatar';
import avatarImage from '../../assets/images/avatar.jpg';

export function BioSection() {
  return (
    <Section>
      <Header />
      <Bio />
    </Section>
  );
}

function Header() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarImage} alt="Nick Inzucchi" />
      </Avatar>
      <GridColumnMain>
        <Text.B3>Nick Inzucchi</Text.B3>
        <Text.B4 className="text-fg-secondary">Product Design Lead at Substack</Text.B4>
      </GridColumnMain>
    </div>
  );
}

function Bio() {
  return (
    <>
      <Text.B3>
        I'm a product designer and front-end engineer at{' '}
        <TextLink newTab href="https://substack.com" className="underline">
          Substack
        </TextLink>
        , where we're creating a new economic engine for culture.
      </Text.B3>
      <Text.B3>
        Before Substack, I developed features at{' '}
        <TextLink newTab href="https://meta.com" className="underline">
          Meta
        </TextLink>{' '}
        to protect the platform from abuse, ensure fair elections, and respond to global security
        threats.
      </Text.B3>
      <Text.B3>
        Prior to that, I was an interaction designer at{' '}
        <TextLink newTab href="https://ideo.com" className="underline">
          IDEO
        </TextLink>
        , where I helped global brands like Google, Ford, Bayer and American Express launch
        best-in-class digital experiences.
      </Text.B3>
      <Text.B3>I live in the Mission, San Francisco.</Text.B3>
    </>
  );
}

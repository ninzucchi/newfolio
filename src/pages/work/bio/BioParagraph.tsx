import { Text } from '@/components/ui/text/Text';
import { TextLink } from '@/components/ui/text/TextLink';

export function BioParagraph() {
  return (
    <div className="flex flex-col gap-4 py-0 sm:py-4">
      <Text.B3>
        I'm a product designer at{' '}
        <TextLink newTab href="https://cursor.com" className="underline">
          Cursor
        </TextLink>
        , focused on the core experience of building software with AI.
      </Text.B3>
      <Text.B3>
        Before that, I spent several years as a product design lead and design engineer at{' '}
        <TextLink newTab href="https://substack.com" className="underline">
          Substack
        </TextLink>
        , shipping publishing workflows, social surfaces, and platform capabilities.
      </Text.B3>
      <Text.B3>
        At{' '}
        <TextLink newTab href="https://meta.com" className="underline">
          Meta
        </TextLink>
        , I led design for integrity and safety—election tooling, abuse prevention, and responses to
        global security threats.
      </Text.B3>
      <Text.B3>
        Earlier, I was an interaction designer at{' '}
        <TextLink newTab href="https://ideo.com" className="underline">
          IDEO
        </TextLink>
        , partnering with Google, Ford, Bayer, and American Express on flagship digital products.
      </Text.B3>
      <Text.B3>Based in San Francisco.</Text.B3>
    </div>
  );
}

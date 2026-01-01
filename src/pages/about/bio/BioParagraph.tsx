import { Text } from '../../../components/ui/text/Text';
import { TextLink } from '../../../components/ui/text/TextLink';

export function BioParagraph() {
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

import { Text } from '../ui/Text';
import { IconLink } from '../ui/IconLink';
import { XIcon } from '../icons/XIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { GitHubIcon } from '../icons/GitHubIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { TextLink } from '@/components/ui/TextLink';

export function Footer() {
  return (
    <footer className="bg-background sticky bottom-0 mt-auto">
      <div className="mx-auto flex max-w-[640px] flex-row items-center justify-between gap-0 p-5">
        <Text.B4 className="text-fg-secondary">
          <TextLink href="mailto:ninzucchi@gmail.com" className="hover:text-foreground underline">
            ninzucchi@gmail.com
          </TextLink>
        </Text.B4>
        <div className="flex gap-6">
          <IconLink href="https://www.linkedin.com/in/ninzucchi/" aria-label="LinkedIn" newTab>
            <LinkedInIcon size={16} />
          </IconLink>
          <IconLink href="https://github.com/ninzucchi" aria-label="GitHub" newTab>
            <GitHubIcon size={16} />
          </IconLink>
          <IconLink href="https://www.instagram.com/ninzucchi/" aria-label="Instagram" newTab>
            <InstagramIcon size={16} />
          </IconLink>
          <IconLink href="https://x.com/ninzucchi" aria-label="X" newTab>
            <XIcon size={16} />
          </IconLink>
        </div>
      </div>
    </footer>
  );
}

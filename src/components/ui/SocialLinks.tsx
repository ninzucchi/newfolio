import { IconLink } from '@/components/ui/IconLink';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <IconLink href="https://github.com/ninzucchi" aria-label="GitHub" newTab>
        <GitHubIcon size={20} />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/ninzucchi/" aria-label="LinkedIn" newTab>
        <LinkedInIcon size={20} />
      </IconLink>
    </div>
  );
}

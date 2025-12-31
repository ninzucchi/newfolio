import { IconLink } from './IconLink';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { GitHubIcon } from '../icons/GitHubIcon';

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <IconLink href="https://github.com/ninzucchi" aria-label="GitHub" newTab>
        <GitHubIcon size={16} />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/ninzucchi/" aria-label="LinkedIn" newTab>
        <LinkedInIcon size={16} />
      </IconLink>
    </div>
  );
}

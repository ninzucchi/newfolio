import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from 'lucide-react';

export function ContactButton() {
  return (
    <a href="mailto:ninzucchi@gmail.com" className="display-contents self-start">
      <Button>
        Reach out <ArrowRightIcon size={16} />{' '}
      </Button>
    </a>
  );
}

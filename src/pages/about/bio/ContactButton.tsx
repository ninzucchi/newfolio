import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from 'lucide-react';

export function ContactButton() {
  return (
    <Button asChild className="self-start">
      <a href="mailto:ninzucchi@gmail.com">
        Reach out <ArrowRightIcon size={16} />
      </a>
    </Button>
  );
}

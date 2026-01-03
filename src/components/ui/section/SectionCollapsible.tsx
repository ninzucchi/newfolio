import { Collapsible, CollapsibleContent } from '@/components/ui/Collapsible';
import { defaultDuration, defaultEasing } from '@/lib/animation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Section } from './Section';
import { SectionHeaderCollapsible } from './SectionHeader';

export function SectionCollapsible({
  className,
  defaultOpen = true,
  title,
  children,
}: {
  className?: string;
  defaultOpen?: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} defaultOpen={defaultOpen} onOpenChange={setIsOpen} asChild>
      <Section className={cn('gap-0', className)}>
        <SectionHeaderCollapsible isOpen={isOpen}>{title}</SectionHeaderCollapsible>
        <CollapsibleContent forceMount asChild>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: defaultDuration, ease: defaultEasing }}
                className="-mx-4 overflow-hidden px-4"
              >
                <div className="h-5" />
                {children}
                <div className="h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
      </Section>
    </Collapsible>
  );
}

import { Collapsible, CollapsibleContent } from '@/components/ui/Collapsible';
import { defaultEasing } from '@/lib/easing';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeaderCollapsible } from './SectionHeader';

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <section className={cn('flex flex-col gap-6', className)} {...props}>
      {children}
    </section>
  );
}

export function SectionCollapsible({
  className,
  title,
  children,
}: {
  className?: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={handleOpenChange} asChild>
      <Section className={cn('gap-0', className)}>
        <SectionHeaderCollapsible isOpen={isOpen}>{title}</SectionHeaderCollapsible>
        <CollapsibleContent forceMount asChild>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: defaultEasing }}
                className="-mx-4 overflow-hidden px-4"
              >
                <div className="h-6" />
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
      </Section>
    </Collapsible>
  );
}

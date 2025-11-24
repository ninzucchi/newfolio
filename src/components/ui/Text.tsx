import type { HTMLAttributes, ElementType } from 'react';
import { cn } from '../../lib/utils';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextVariant;
  variant?: TextVariant;
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-4xl font-semibold leading-tight text-foreground',
  h2: 'text-3xl font-semibold leading-tight text-foreground',
  h3: 'text-2xl font-semibold leading-tight text-foreground',
  h4: 'text-xl font-semibold leading-tight text-foreground',
  h5: 'text-lg font-semibold leading-tight text-foreground',
  h6: 'text-base font-semibold leading-tight text-foreground',
  p: 'text-base leading-normal text-foreground mb-4',
  span: 'text-base leading-normal text-foreground',
};

export function Text({ as, variant, className = '', children, ...props }: TextProps) {
  // Use 'as' prop if provided, otherwise use 'variant', default to 'p'
  const element = (as || variant || 'p') as TextVariant;
  const baseStyles = variantStyles[element];

  const Component = element as ElementType;

  return (
    <Component className={cn(baseStyles, className)} {...props}>
      {children}
    </Component>
  );
}

// Convenience components
Text.H1 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="h1" className={className} {...props} />
);

Text.H2 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="h2" className={className} {...props} />
);

Text.H3 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="h3" className={className} {...props} />
);

Text.H4 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="h4" className={className} {...props} />
);

Text.H5 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="h5" className={className} {...props} />
);

Text.H6 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="h6" className={className} {...props} />
);

Text.P = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="p" className={className} {...props} />
);

Text.Span = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="span" className={className} {...props} />
);

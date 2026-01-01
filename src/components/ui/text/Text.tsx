import { cn } from '@/lib/utils';
import type { ElementType, HTMLAttributes } from 'react';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'b4';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextVariant;
  variant?: TextVariant;
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-4xl font-semibold leading-tight',
  h2: 'text-3xl font-semibold leading-tight',
  h3: 'text-2xl font-semibold leading-tight',
  h4: 'text-xl font-semibold leading-tight',
  h5: 'text-lg font-semibold leading-tight',
  h6: 'text-base font-semibold leading-tight',
  p: 'text-base leading-normal',
  span: 'text-base leading-normal',
  b1: 'text-xl leading-normal',
  b2: 'text-lg leading-normal',
  b3: 'text-base leading-normal',
  b4: 'text-sm leading-normal',
};

export function Text({ as, variant, className = '', children, ...props }: TextProps) {
  // Use 'as' prop if provided, otherwise use 'variant', default to 'p'
  // Map b1-b4 to p element since they're body text variants
  const element = (as || variant || 'p') as TextVariant;
  const htmlElement: TextVariant = (['b1', 'b2', 'b3', 'b4'] as TextVariant[]).includes(element)
    ? 'p'
    : element;
  const baseStyles = variantStyles[element];

  const Component = htmlElement as ElementType;

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

Text.B1 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="b1" className={className} {...props} />
);

Text.B2 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="b2" className={className} {...props} />
);

Text.B3 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="b3" className={className} {...props} />
);

Text.B4 = ({ className = '', ...props }: Omit<TextProps, 'as' | 'variant'>) => (
  <Text as="b4" className={className} {...props} />
);

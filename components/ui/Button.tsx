import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

import { ButtonHTMLAttributes, forwardRef } from 'react';

const variants = cva('', {
  variants: {
    variant: {
      default: 'h-10 w-24 rounded-3xl bg-[#282828] p-2 disabled:cursor-not-allowed disabled:opacity-60',
      accent: 'h-10 w-24 rounded-3xl bg-[#ecd5b8] p-2 disabled:cursor-not-allowed disabled:opacity-60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, className, ...props }, ref) => {
  return (
    <button className={cn(variants({ variant, className }))} ref={ref} {...props}>
      {props.children}
    </button>
  );
});
Button.displayName = 'Button';
export { Button };

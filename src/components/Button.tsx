'use client';

import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import {forwardRef} from 'react';

import {ButtonProps} from '@/types';
import {cn} from '@/util/style';

export const ButtonVariant = cva(
  'flex items-center justify-center rounded-full w-full',
  {
    variants: {
      variant: {
        default:
          'bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text',
        secondary: ' bg-button-green text-white',
        ghost:
          'bg-transparent text-white border border-solid border-light-gray-dark dark:border-dark-gray-light',
      },
      size: {
        default: 'p-3',
        large: 'p-4',
        small: 'p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {children, asChild, className, variant, size, ...htmlPros},
  ref,
) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      {...htmlPros}
      className={cn(ButtonVariant({variant, size}), className)}
    >
      {children}
    </Comp>
  );
});
Button.displayName = 'Button';

export default Button;

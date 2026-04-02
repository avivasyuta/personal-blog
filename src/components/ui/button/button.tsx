import { type ComponentPropsWithoutRef } from 'react';
import Link, { type LinkProps } from 'next/link';
import { cn } from '@/src/lib/utils';

const variantClasses = {
  primary: 'rounded-lg bg-primary text-white hover:bg-primary-hover hover:shadow-[0_0_20px_var(--color-primary-glow)]',
  secondary:
    'rounded-lg border border-border bg-surface text-text-secondary hover:border-border-hover hover:text-foreground',
  ghost: 'rounded-md text-text-tertiary hover:bg-surface-hover hover:text-foreground',
  danger:
    'rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-300',
  accent:
    'rounded-xl bg-linear-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98]',
} as const;

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-sm font-semibold',
} as const;

const squareSizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50';

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  square?: boolean;
  className?: string;
};

type ButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof SharedProps> & {
    href?: never;
  };

type ButtonAsLink = SharedProps &
  Omit<LinkProps & ComponentPropsWithoutRef<'a'>, keyof SharedProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant = 'secondary', size = 'md', square, ...props }: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    square ? squareSizeClasses[size] : sizeClasses[size],
    className
  );

  if ('href' in props && props.href !== undefined) {
    return (
      <Link
        className={classes}
        {...props}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonAsButton)}
    />
  );
}

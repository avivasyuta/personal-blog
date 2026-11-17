import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: ReactNode;
  align?: 'start' | 'center';
  className?: string;
};

// The heading every home section starts with, sized like the headings on the project pages
export function SectionHeading({ label, title, description, align = 'start', className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      <p className="section-label">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="max-w-xl text-text-secondary leading-relaxed text-pretty">{description}</p>}
    </div>
  );
}

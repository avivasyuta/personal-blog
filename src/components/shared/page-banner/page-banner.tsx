import type { CSSProperties, PropsWithChildren } from 'react';
import { ShowcaseBackdrop } from '@/src/components/shared/project-showcase';
import { cn } from '@/src/lib/utils';

type PageBannerProps = PropsWithChildren<{
  accent: string;
  className?: string;
}>;

// The colored top of a page, the same light as the project banners but only as tall as its content.
// It runs under the transparent header and fades into the page below
export function PageBanner({ accent, className, children }: PageBannerProps) {
  return (
    <section
      className="showcase relative isolate -mt-17 w-full overflow-hidden pt-17"
      style={{ '--accent': accent, '--dir': 1 } as CSSProperties}
    >
      <ShowcaseBackdrop />

      <div className={cn('relative mx-auto w-full max-w-7xl px-4 pt-12 pb-24 md:px-8 md:pt-20 md:pb-32', className)}>
        {children}
      </div>
    </section>
  );
}

import { type CSSProperties, Suspense } from 'react';
import type { Metadata } from 'next';
import { Posts } from './posts';
import { PageBanner } from '@/src/components/shared/page-banner';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Step-by-step LeetCode problem solutions and data structure deep dives, with TypeScript code and time and space complexity analysis.',
};

export default function BlogPage() {
  return (
    <>
      <PageBanner accent="#f97316">
        <div className="flex max-w-5xl flex-col gap-5">
          <span
            className="showcase-reveal w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.14em] text-white/80 uppercase"
            style={{ '--i': 0 } as CSSProperties}
          >
            Blog
          </span>

          <h1
            className="showcase-reveal text-5xl font-bold tracking-tight text-white text-balance md:text-7xl"
            style={{ '--i': 1 } as CSSProperties}
          >
            Algorithms, step by step
          </h1>

          <p
            className="showcase-reveal max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ '--i': 2 } as CSSProperties}
          >
            LeetCode problems and data structures, solved in TypeScript with the reasoning, the code and the time and
            space complexity.
          </p>
        </div>
      </PageBanner>

      <div className="mx-auto w-full max-w-7xl px-4 pb-24 md:px-8 md:pb-32">
        <Suspense>
          <Posts />
        </Suspense>
      </div>
    </>
  );
}

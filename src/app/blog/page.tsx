import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Step-by-step LeetCode problem solutions and data structure deep dives, with TypeScript code and time and space complexity analysis.',
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-12">Blog</h1>

      <Suspense>
        <Posts />
      </Suspense>
    </div>
  );
}

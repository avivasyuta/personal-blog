import { Suspense } from 'react';
import { Posts } from './posts';

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

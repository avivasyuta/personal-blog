import Link from 'next/link';
import { getAllPosts } from '@/src/lib/posts';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Writing</p>
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="card-surface p-6 group"
          >
            <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h2>
                <ArrowRight size={16} className="text-text-tertiary group-hover:text-primary transition-all group-hover:translate-x-1" />
              </div>

              <time className="text-xs text-text-tertiary font-mono">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

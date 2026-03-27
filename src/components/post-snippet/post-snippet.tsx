import Link from 'next/link';
import { SimplePost } from '@/src/types';
import { ArrowRight, Hash } from 'lucide-react';
import { ComplexityBadge } from '@/src/components/complexity-badge';

type PostSnippetProps = {
  post: SimplePost;
};

export function PostSnippet({ post }: PostSnippetProps) {
  return (
    <article
      key={post.slug}
      className="card-surface group"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col gap-2 p-6"
      >
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h2>

          <ArrowRight
            size={16}
            className="hidden md:block text-text-tertiary group-hover:text-primary transition-all group-hover:translate-x-1 shrink-0"
          />
        </div>

        <div className="flex items-center gap-4">
          {post.complexity && (
            <>
              <ComplexityBadge complexity={post.complexity} />

              <span
                className="w-px h-3.5 bg-border"
                aria-hidden="true"
              />
            </>
          )}

          <time className="text-xs text-text-tertiary font-mono">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-1.5">
            <Hash
              size={12}
              className="text-text-tertiary shrink-0"
            />

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Link>
    </article>
  );
}

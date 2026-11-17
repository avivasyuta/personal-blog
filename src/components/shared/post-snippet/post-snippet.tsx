import type { CSSProperties } from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { SimplePost } from '@/src/types';
import { ComplexityBadge, complexityAccent } from '@/src/components/shared/complexity-badge';

type PostSnippetProps = {
  post: SimplePost;
};

// A card tinted with the color of the post's difficulty
export function PostSnippet({ post }: PostSnippetProps) {
  return (
    <article
      className="accent-surface group relative h-full overflow-hidden rounded-3xl transition-colors hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
      style={{ '--accent': complexityAccent(post.complexity) } as CSSProperties}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col gap-4 p-6 md:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {post.complexity && <ComplexityBadge complexity={post.complexity} />}

            <time className="text-xs text-text-tertiary">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>

          <span
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black"
          >
            <FiArrowUpRight size={18} />
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{post.title}</h2>

        <p className="text-text-secondary leading-relaxed">{post.excerpt}</p>

        {post.tags && post.tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-text-secondary"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </article>
  );
}

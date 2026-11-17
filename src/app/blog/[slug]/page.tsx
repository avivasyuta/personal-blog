import type { CSSProperties } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { getPostBySlug, getAllPostSlugs } from '@/src/lib/posts';
import { MDXContent } from '@/src/components/shared/mdx-content';
import { ComplexityBadge, complexityAccent } from '@/src/components/shared/complexity-badge';
import { PageBanner } from '@/src/components/shared/page-banner';
import { headingsOf } from '@/src/lib/headings';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const headings = post.isMdx ? headingsOf(post.content) : [];
  const accent = complexityAccent(post.complexity);

  return (
    <>
      <PageBanner accent={accent}>
        <div className="flex flex-col gap-6">
          <Link
            href="/blog"
            className="showcase-reveal group inline-flex w-fit items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            style={{ '--i': 0 } as CSSProperties}
          >
            <FiArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All posts
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-16">
            <div className="flex flex-col gap-6">
              <h1
                className="showcase-reveal text-4xl leading-[1.05] font-bold tracking-tight text-white text-balance md:text-6xl xl:text-7xl"
                style={{ '--i': 1 } as CSSProperties}
              >
                {post.title}
              </h1>

              {post.excerpt && (
                <p
                  className="showcase-reveal max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
                  style={{ '--i': 2 } as CSSProperties}
                >
                  {post.excerpt}
                </p>
              )}
            </div>

            <dl
              className="showcase-reveal flex flex-col gap-5 rounded-3xl border border-white/15 bg-white/10 p-6 text-sm"
              style={{ '--i': 3 } as CSSProperties}
            >
              {post.complexity && (
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/60">Difficulty</dt>
                  <dd>
                    <ComplexityBadge complexity={post.complexity} />
                  </dd>
                </div>
              )}

              <div className="flex items-center justify-between gap-4">
                <dt className="text-white/60">Published</dt>
                <dd className="font-medium text-white">
                  <time dateTime={post.date}>{postDate}</time>
                </dd>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex items-start justify-between gap-4">
                  <dt className="pt-0.5 text-white/60">Topics</dt>
                  <dd className="flex flex-wrap justify-end gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-xs text-white"
                      >
                        #{tag}
                      </span>
                    ))}
                  </dd>
                </div>
              )}

              {post.original_url && (
                <a
                  href={post.original_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full white-pill px-6 text-sm font-semibold text-black"
                >
                  <FiExternalLink size={16} />
                  Open on LeetCode
                </a>
              )}
            </dl>
          </div>
        </div>
      </PageBanner>

      <div
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-4 pb-24 md:px-8 md:pb-32 lg:grid-cols-[minmax(0,1fr)_16rem]"
        style={{ '--accent': accent } as CSSProperties}
      >
        <article className="min-w-0 max-w-3xl">
          {post.isMdx ? (
            <MDXContent source={post.content} />
          ) : (
            <div
              className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </article>

        {headings.length > 1 && (
          <aside className="hidden lg:block">
            <nav
              aria-label="On this page"
              className="sticky top-24 flex flex-col gap-3"
            >
              <p className="text-xs font-medium tracking-[0.14em] text-text-tertiary uppercase">On this page</p>

              <ul className="flex flex-col border-l border-white/10">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-text-secondary transition-colors hover:border-(--accent) hover:text-foreground"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </>
  );
}

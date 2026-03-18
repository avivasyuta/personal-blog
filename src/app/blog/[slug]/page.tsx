import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Hash } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/src/lib/posts';
import { MDXContent } from '@/src/components/mdx-content';
import { ComplexityBadge } from '@/src/components/complexity-badge';
import { Divider } from '@/src/components/divider';

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
      card: 'summary',
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


  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-primary transition-colors duration-300 group"
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back to Blog
      </Link>

      <article>
        <header className="relative mb-12 md:mb-16">
          <h1 className="relative text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] text-gradient mb-6">
            {post.title}
          </h1>

          <div className="relative card-surface rounded-xl p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Calendar size={14} className="text-text-tertiary shrink-0" />

                <time className="font-mono text-text-secondary">
                  {postDate}
                </time>
              </div>

              {post.complexity && (
                <>
                  <span className="hidden sm:block w-px h-4 bg-border" aria-hidden="true" />
                  <ComplexityBadge complexity={post.complexity} />
                </>
              )}

              {post.tags && post.tags.length > 0 && (
                <>
                  <span className="hidden sm:block w-px h-4 bg-border" aria-hidden="true" />
                  <div className="flex items-center gap-2 text-sm">
                    <Hash size={14} className="text-text-tertiary shrink-0" />
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
                </>
              )}

              {post.original_url && (
                <>
                  <span className="hidden sm:block w-px h-4 bg-border" aria-hidden="true" />
                  <a
                    href={post.original_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:ml-auto inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-primary transition-colors duration-300 group/link"
                  >
                    <ExternalLink
                      size={13}
                      className="transition-transform duration-300"
                    />

                    <span className="border-b border-transparent group-hover/link:border-primary/40 transition-colors duration-300">
                      Leetcode challenge
                    </span>
                  </a>
                </>
              )}
            </div>
          </div>
        </header>

        <Divider />

        {post.isMdx ? (
          <MDXContent source={post.content} />
        ) : (
          <div
            className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </article>
    </main>
  );
}

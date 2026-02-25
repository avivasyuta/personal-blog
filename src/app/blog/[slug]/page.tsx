import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/src/lib/posts';
import { MDXContent } from '@/src/components/mdx-content';

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
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      <article>
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>

          <time className="text-sm text-text-tertiary font-mono">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        {post.isMdx ? (
          <MDXContent source={post.content} />
        ) : (
          <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary" dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </article>
    </main>
  );
}

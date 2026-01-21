import Link from 'next/link';
import { getAllPosts } from '@/src/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border border-gray-700 p-6 transition-colors hover:border-gray-500"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mb-2 text-2xl font-semibold hover:underline">{post.title}</h2>
            </Link>

            <time className="mb-3 block text-sm text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>

            <p className="text-gray-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

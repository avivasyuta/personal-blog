import { getAllPosts } from '@/src/lib/posts';
import PostsFilter from '@/src/components/posts-filter';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Writing</p>
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      </div>

      <PostsFilter posts={posts} />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PostSearch } from '@/src/components/shared/posts-search';
import { Complexity, PostsFilter } from '@/src/types';
import { PostSnippet } from '@/src/components/shared/post-snippet';
import { Loader } from '@/src/components/ui/loader';
import { usePosts } from './usePosts';

export function Posts() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState<PostsFilter>({
    query: searchParams.get('query') ?? '',
    complexity: (searchParams.get('complexity') as Complexity) ?? undefined,
    tags: searchParams.get('tags') ? searchParams.get('tags')!.split(',') : [],
  });
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  const handleFilterChange = (newFilter: PostsFilter) => {
    setFilter(newFilter);

    const params = new URLSearchParams();
    if (newFilter.query) {
      params.set('query', newFilter.query);
    }

    if (newFilter.complexity) {
      params.set('complexity', newFilter.complexity);
    }

    if (newFilter.tags && newFilter.tags.length > 0) {
      params.set('tags', newFilter.tags.join(','));
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    fetch('/api/tags')
      .then((r) => r.json())
      .then(setAvailableTags)
      .catch(() => {});
  }, []);

  const { posts, isLoading, error } = usePosts(filter);

  return (
    <div className="flex flex-col gap-8">
      <PostSearch
        value={filter}
        onChange={handleFilterChange}
        availableTags={availableTags}
      />

      {isLoading && <Loader />}

      {error && <p className="text-center text-sm text-text-error mt-6">{error}</p>}

      <div className="flex flex-col gap-4">
        {posts.length === 0 && !isLoading && (
          <p className="text-text-tertiary text-sm py-8 text-center">No posts found</p>
        )}

        {posts.map((post) => (
          <PostSnippet
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

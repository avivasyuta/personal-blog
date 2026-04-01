'use client';

import { useEffect, useState } from 'react';
import { PostSearch } from '@/src/components/shared/posts-search';
import { PostsFilter } from '@/src/types';
import { PostSnippet } from '@/src/components/shared/post-snippet';
import { Loader } from '@/src/components/ui/loader';
import { usePosts } from './usePosts';

export function Posts() {
  const [filter, setFilter] = useState<PostsFilter>({
    query: '',
    complexity: undefined,
    tags: [],
  });
  const [availableTags, setAvailableTags] = useState<string[]>([]);

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
        onChange={setFilter}
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

'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Search, X } from 'lucide-react';
import type { Post, Complexity } from '@/src/types';

type PostItem = Omit<Post, 'content'>;

const COMPLEXITY_ORDER: Complexity[] = ['easy', 'medium', 'hard'];

const COMPLEXITY_COLORS: Record<Complexity, string> = {
  easy: 'btn-success',
  medium: 'btn-warning',
  hard: 'btn-error',
};


// TODO: refactor and replace with design system components
export default function PostsFilter({ posts }: { posts: PostItem[] }) {
  const [search, setSearch] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState<Complexity | null>(null);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [tagsOpen, setTagsOpen] = useState(false);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (tagsRef.current && !tagsRef.current.contains(e.target as Node)) {
        setTagsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const post of posts) {
      for (const tag of post.tags ?? []) {
        if (!COMPLEXITY_ORDER.includes(tag as Complexity)) {
          tags.add(tag);
        }
      }
    }
    return Array.from(tags).sort();
  }, [posts]);

  const complexities = useMemo(() => {
    const set = new Set<Complexity>();
    for (const post of posts) {
      if (post.complexity) set.add(post.complexity);
    }
    return COMPLEXITY_ORDER.filter((c) => set.has(c));
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      if (search && !post.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      if (selectedComplexity && post.complexity !== selectedComplexity) {
        return false;
      }
      if (selectedTags.size > 0) {
        const postTags = new Set(post.tags ?? []);
        for (const tag of selectedTags) {
          if (!postTags.has(tag)) return false;
        }
      }
      return true;
    });
  }, [posts, search, selectedComplexity, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
        />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl bg-surface border border-border pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Filters */}
      {(complexities.length > 0 || allTags.length > 0) && (
        <div className="flex flex-wrap items-center gap-2">
          {/* Complexity */}
          {complexities.length > 0 && (
            <div className="relative">
              <select
                value={selectedComplexity ?? ''}
                onChange={(e) =>
                  setSelectedComplexity(
                    e.target.value ? (e.target.value as Complexity) : null,
                  )
                }
                className={`appearance-none rounded-xl bg-surface border border-border pl-3 ${selectedComplexity ? 'pr-14' : 'pr-8'} py-1.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer`}
              >
                <option value="">Complexity</option>
                {complexities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {selectedComplexity && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedComplexity(null);
                  }}
                  className="absolute right-7 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-foreground transition-colors"
                >
                  <X size={12} />
                </button>
              )}
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none"
              />
            </div>
          )}

          {/* Tags */}
          {allTags.length > 0 && (
            <div className="relative" ref={tagsRef}>
              <button
                onClick={() => setTagsOpen((v) => !v)}
                className={`flex items-center gap-1.5 rounded-xl bg-surface border ${tagsOpen ? 'border-primary' : 'border-border'} pl-3 ${selectedTags.size > 0 ? 'pr-14' : 'pr-8'} py-1.5 text-sm text-foreground transition-colors cursor-pointer`}
              >
                {selectedTags.size > 0 ? (
                  <span>
                    Tags{' '}
                    <span className="text-text-tertiary">
                      ({selectedTags.size})
                    </span>
                  </span>
                ) : (
                  'Tags'
                )}
              </button>
              {selectedTags.size > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTags(new Set());
                  }}
                  className="absolute right-7 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-foreground transition-colors"
                >
                  <X size={12} />
                </button>
              )}
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none"
              />
              {tagsOpen && (
                <div className="absolute top-full left-0 mt-1 z-10 min-w-40 rounded-xl bg-surface border border-border shadow-lg py-1">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-left hover:bg-border/50 transition-colors"
                    >
                      <span
                        className={`size-3.5 rounded border flex items-center justify-center ${selectedTags.has(tag) ? 'bg-primary border-primary text-white' : 'border-border'}`}
                      >
                        {selectedTags.has(tag) && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 5L4 7L8 3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Posts */}
      <div className="flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="text-text-tertiary text-sm py-8 text-center">
            No posts found.
          </p>
        ) : (
          filtered.map((post) => (
            <article key={post.slug} className="card-surface p-6 group">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <ArrowRight
                    size={16}
                    className="text-text-tertiary group-hover:text-primary transition-all group-hover:translate-x-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <time className="text-xs text-text-tertiary font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  {post.complexity && (
                    <span
                      className={`badge badge-xs ${COMPLEXITY_COLORS[post.complexity]}`}
                    >
                      {post.complexity}
                    </span>
                  )}

                  {post.tags
                    ?.filter((t) => !COMPLEXITY_ORDER.includes(t as Complexity))
                    .map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-xs badge-ghost border-border"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

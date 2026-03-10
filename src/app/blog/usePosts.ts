import { getPostsByFilter } from "@/src/lib/posts";
import { Post, PostsFilter } from "@/src/types";
import { useEffect, useMemo, useState } from "react";

type UsePostsResult = {
    posts: Post[];
    isLoading: boolean;
    error: string | null;
};

export function usePosts(filter?: PostsFilter): UsePostsResult {
    const [state, setState] = useState<UsePostsResult>({
        isLoading: false,
        posts: [],
        error: null,
    });

    const fetchPosts = async (filter: PostsFilter) => {
        setState((prev) => ({ ...prev, isLoading: true }));

        const url = '/api/posts';
        
        const params = new URLSearchParams();
        if (filter.query) {
            params.set('query', filter.query || '');
        }
        if (filter.complexity) {
            params.set('complexity', filter.complexity);
        }
        if (filter.tags && filter.tags?.length > 0) {
            params.set('tags', filter.tags.join(','));
        }

        try {
            const posts = await fetch(`${url}${params.size > 0 ? `?${params.toString()}` : ''}`);
            
            if (!posts.ok) {
                setState((prev) => ({ ...prev, error: 'Failed to fetch posts' }));
            }

            const data = await posts.json();

            setState((prev) => ({ ...prev, posts: data }));
        } catch (error) {
            setState((prev) => ({ ...prev, error: (error as Error).message }));
        } finally {
            setState((prev) => ({ ...prev, isLoading: false }));
        }
    }

    useEffect(() => {
        fetchPosts(filter ?? { query: '', tags: [] });
    }, [filter]);

    return {
        isLoading: state.isLoading,
        error: state.error,
        posts: state.posts,
    };
}
import Link from "next/link";
import { Complexity, SimplePost } from "@/src/types";
import { ArrowRight } from "lucide-react";

type PostSnippetProps = {
    post: SimplePost;
};

export function PostSnippet({ post }: PostSnippetProps) {
    return (
        <article key={post.slug} className="card-surface group">
            <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 p-6"
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

                <div className="flex items-center gap-4">
                    <time className="text-xs text-text-tertiary font-mono">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>

                    <div className="flex items-center gap-2">
                        {post.complexity && (
                            <span
                                className='badge badge-soft badge-xs badge-accent px-2'
                            >
                                {post.complexity}
                            </span>
                        )}

                        {post.tags && post.tags.map((tag) => (
                            <span
                                key={tag}
                                // TODO change theme colors
                                className="badge badge-soft badge-xs badge-accent px-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                    {post.excerpt}
                </p>
            </Link>
        </article>
    )
}
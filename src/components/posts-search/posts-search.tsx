'use client';

import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { Complexity, PostsFilter } from '@/src/types';

type PostSearchProps = {
    onChange: (newValue: PostsFilter) => void;
    value: PostsFilter;
};

const complexities: Complexity[] = ['easy', 'medium', 'hard'];

export function PostSearch({ value, onChange }: PostSearchProps) {
    const [query, setQuery] = useState('');

    const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...value,
            query: e.currentTarget.value,
        });
    }

    const handleChangeComplexity = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange({
            ...value,
            complexity: e.currentTarget.value as Complexity,
        });
    }

    const clearComplexity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        onChange({
            ...value,
            complexity: undefined,
        });
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className="relative">
                <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
                />

                <input
                    type="text"
                    placeholder="Search posts..."
                    value={value.query}
                    onChange={handleChangeQuery}
                    className="w-full rounded-xl bg-surface border border-border pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors"
                />
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                    <select
                        value={value.complexity ?? ''}
                        onChange={handleChangeComplexity}
                        className={`appearance-none rounded-xl bg-surface border border-border pl-3 ${value.complexity ? 'pr-14' : 'pr-8'} py-1.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer`}
                    >
                        <option value="">Complexity</option>

                        {complexities.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>

                    {value.complexity && (
                        <button
                            onClick={clearComplexity}
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

                {/* <div className="relative">
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
                </div> */}
            </div>
        </div>
    )
}
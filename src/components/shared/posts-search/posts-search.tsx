'use client';

import { ChangeEvent } from 'react';
import { FiSearch, FiTrash2 } from 'react-icons/fi';
import { Complexity, PostsFilter } from '@/src/types';
import { Input } from '@/src/components/ui/input';
import { Select } from '@/src/components/ui/select';
import { MultiSelect } from '@/src/components/ui/multi-select';

type PostSearchProps = {
  onChange: (newValue: PostsFilter) => void;
  value: PostsFilter;
  availableTags?: string[];
};

const complexities: Complexity[] = ['easy', 'medium', 'hard'];
const complexityOptions = complexities.map((c) => ({ value: c, label: c }));

export function PostSearch({ value, onChange, availableTags = [] }: PostSearchProps) {
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      query: e.currentTarget.value,
    });
  };

  const tagOptions = availableTags.map((t) => ({ value: t, label: t }));

  const hasActiveFilters = Boolean(value.query) || Boolean(value.complexity) || (value.tags?.length ?? 0) > 0;

  const clearAll = () => onChange({ query: '', complexity: undefined, tags: [] });

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <FiSearch
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
        />

        <Input
          type="text"
          placeholder="Search posts..."
          value={value.query}
          onChange={handleChangeQuery}
          className="pl-10 pr-4 bg-surface border-border placeholder:text-text-tertiary focus-visible:border-primary"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Select
          value={value.complexity}
          onChange={(v) => onChange({ ...value, complexity: v as Complexity })}
          onClear={() => onChange({ ...value, complexity: undefined })}
          placeholder="Complexity"
          options={complexityOptions}
        />

        {tagOptions.length > 0 && (
          <MultiSelect
            value={value.tags}
            onChange={(tags) => onChange({ ...value, tags })}
            onClear={() => onChange({ ...value, tags: [] })}
            placeholder="Tags"
            options={tagOptions}
          />
        )}

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto flex items-center gap-1.5 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 px-3 py-1.5 text-sm text-red-400 hover:text-red-300 transition-colors cursor-pointer group"
          >
            <FiTrash2 size={12} />
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}

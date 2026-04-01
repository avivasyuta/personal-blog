'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { FiCheck, FiChevronDown, FiX } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';
import type { SelectOption } from './select';

type MultiSelectProps = {
  value?: string[];
  onChange?: (value: string[]) => void;
  onClear?: () => void;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
};

export function MultiSelect({
  value = [],
  onChange,
  onClear,
  placeholder = 'Select...',
  options,
  className,
}: MultiSelectProps) {
  const hasValue = value.length > 0;

  return (
    <SelectPrimitive.Root
      multiple
      value={value}
      onValueChange={onChange}
    >
      <div className={cn('relative inline-flex items-center', className)}>
        <SelectPrimitive.Trigger
          className={cn(
            'appearance-none flex items-center gap-1.5 rounded-lg bg-surface border border-border pl-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer',
            hasValue ? 'pr-14' : 'pr-8'
          )}
        >
          {hasValue ? (
            <span>
              Tags <span className="text-text-tertiary">({value.length})</span>
            </span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </SelectPrimitive.Trigger>

        {hasValue && onClear && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClear();
            }}
            className="absolute right-7 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-foreground transition-colors cursor-pointer"
          >
            <FiX size={12} />
          </button>
        )}

        <FiChevronDown
          size={14}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none"
        />

        <SelectPrimitive.Portal>
          <SelectPrimitive.Positioner
            sideOffset={6}
            align="start"
          >
            <SelectPrimitive.Popup className="z-50 min-w-(--anchor-width) rounded-xl bg-surface border border-border shadow-lg py-1 outline-none data-starting-style:opacity-0 data-ending-style:opacity-0 transition-opacity duration-150">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className="group flex items-center gap-2 px-3 py-1.5 text-sm text-foreground cursor-pointer transition-colors outline-none data-highlighted:bg-surface-hover"
                >
                  <span className="size-3.5 rounded border flex items-center justify-center shrink-0 border-border group-data-selected:bg-primary group-data-selected:border-primary text-white transition-colors">
                    <SelectPrimitive.ItemIndicator>
                      <FiCheck
                        size={10}
                        strokeWidth={2.5}
                      />
                    </SelectPrimitive.ItemIndicator>
                  </span>
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Popup>
          </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
      </div>
    </SelectPrimitive.Root>
  );
}

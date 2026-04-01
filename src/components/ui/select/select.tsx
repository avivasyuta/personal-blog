'use client';

import * as React from 'react';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
};

export function Select({ value, onChange, onClear, placeholder = 'Select...', options, className }: SelectProps) {
  const hasValue = Boolean(value);

  const handleOnChange = (newValue: string | null) => {
    onChange?.(newValue ?? '');
  };

  return (
    <SelectPrimitive.Root
      value={value ?? ''}
      onValueChange={handleOnChange}
    >
      <div className={cn('relative inline-flex items-center', className)}>
        <SelectPrimitive.Trigger
          className={cn(
            'appearance-none flex items-center gap-1.5 rounded-lg bg-surface border border-border pl-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer',
            hasValue ? 'pr-14' : 'pr-8'
          )}
        >
          <SelectPrimitive.Value
            placeholder={placeholder}
            className="data-placeholder:text-muted-foreground"
          />
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
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-foreground cursor-pointer hover:bg-surface-hover transition-colors outline-none data-highlighted:bg-surface-hover"
                >
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

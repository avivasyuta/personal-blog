import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

// Colors sampled from the extension screenshots, so the fragments match the real interface
export const ui = {
  panel: '#242424',
  field: '#2e2e2e',
  border: '#454545',
  primary: '#0073c8',
  success: '#00a135',
  regex: '#9c72fd',
  required: '#ff0020',
  allUrls: '#ffb800',
  link: '#1ea7e8',
  editor: '#2c2e33',
  editorGutter: '#1a1b1e',
  editorActiveLine: '#383a41',
  jsonString: '#16a316',
};

export const methodColors: Record<string, string> = {
  GET: '#09f97b',
  POST: '#ffb435',
  PATCH: '#00caff',
};

export const statusColors: Record<number, string> = {
  200: '#00461a',
  500: '#6f0810',
};

export function UiToggle({ hasLabel = false }: { hasLabel?: boolean }) {
  return (
    <span
      className={cn('flex h-4 shrink-0 items-center p-0.5', hasLabel ? 'w-9 rounded' : 'w-8 justify-end rounded-full')}
      style={{ backgroundColor: ui.success }}
    >
      {hasLabel && <span className="flex-1 pl-0.5 text-[7px] font-bold text-white">ON</span>}

      <span className={cn('flex size-3 items-center justify-center bg-white', hasLabel ? 'rounded-[3px]' : 'rounded-full')}>
        <span
          className="size-1.5 rounded-full"
          style={{ backgroundColor: ui.success }}
        />
      </span>
    </span>
  );
}

export function UiField({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex items-center justify-between gap-2 rounded-md border px-2.5 py-1.5 text-[#dadada]"
      style={{ backgroundColor: ui.field, borderColor: ui.border }}
    >
      {children}
    </div>
  );
}

export function UiLabel({ children, isRequired = false }: { children: ReactNode; isRequired?: boolean }) {
  return (
    <span className="truncate text-[11px] font-medium">
      {children}
      {isRequired && <span style={{ color: ui.required }}> *</span>}
    </span>
  );
}

import type { ReactNode } from 'react';
import { LuChevronsUpDown } from 'react-icons/lu';
import { cn } from '@/src/lib/utils';

// Building blocks of the macOS settings window, shared by the settings previews
export function UiSettingsPanel({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-2xl border border-white/10 bg-[#1f1f21] px-3 pt-2 pb-4 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.9)]">
      {children}
    </div>
  );
}

export function UiGroupTitle({ children }: { children: ReactNode }) {
  return <p className="px-2 pt-2 text-[13px] font-semibold text-white">{children}</p>;
}

export function UiGroup({ children }: { children: ReactNode }) {
  return <div className="divide-y divide-white/5 rounded-lg bg-white/[0.05]">{children}</div>;
}

export function UiRow({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-h-10 items-center justify-between gap-3 px-2.5 py-2 text-[13px] text-white/90">
      {label}
      {children}
    </div>
  );
}

export function UiCaption({ children }: { children: ReactNode }) {
  return <p className="px-2 text-[11px] leading-snug text-white/50">{children}</p>;
}

export function UiSwitch({ isOn }: { isOn: boolean }) {
  return (
    <span
      className={cn(
        'flex h-[22px] w-[38px] shrink-0 items-center rounded-full p-0.5 transition-colors',
        isOn ? 'justify-end bg-[#0a84ff]' : 'justify-start bg-white/15'
      )}
    >
      <span className="h-[18px] w-[22px] rounded-full bg-white/90 shadow" />
    </span>
  );
}

export function UiPicker({ value }: { value: string }) {
  return (
    <span className="flex items-center gap-2 text-white/90">
      {value}
      <span className="flex size-5 items-center justify-center rounded-full bg-white/10">
        <LuChevronsUpDown size={12} />
      </span>
    </span>
  );
}

export function UiButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('rounded-md bg-white/10 px-2.5 py-1 text-[12px] text-white/90', className)}>{children}</span>
  );
}

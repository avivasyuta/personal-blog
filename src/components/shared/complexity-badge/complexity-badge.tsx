import { Complexity } from '@/src/types';
import { cn } from '@/src/lib/utils';

const complexityConfig: Record<Complexity, { label: string; accent: string }> = {
  easy: { label: 'Easy', accent: '#34d399' },
  medium: { label: 'Medium', accent: '#fbbf24' },
  hard: { label: 'Hard', accent: '#f87171' },
};

// A post takes the color of its difficulty, like a project takes its own; posts without one stay orange
export function complexityAccent(complexity?: Complexity) {
  return complexity ? complexityConfig[complexity].accent : '#f97316';
}

type ComplexityBadgeProps = {
  complexity: Complexity;
  className?: string;
};

export function ComplexityBadge({ complexity, className }: ComplexityBadgeProps) {
  const config = complexityConfig[complexity];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white',
        className
      )}
    >
      <span
        aria-hidden
        className="size-2 rounded-full"
        style={{ backgroundColor: config.accent }}
      />
      {config.label}
    </span>
  );
}

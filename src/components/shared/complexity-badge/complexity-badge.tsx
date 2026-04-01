import { FiActivity } from 'react-icons/fi';
import { Complexity } from '@/src/types';

const complexityConfig: Record<Complexity, { label: string; color: string }> = {
  easy: { label: 'Easy', color: 'text-emerald-400' },
  medium: { label: 'Medium', color: 'text-amber-400' },
  hard: { label: 'Hard', color: 'text-red-400' },
};

type ComplexityBadgeProps = {
  complexity: Complexity;
};

export function ComplexityBadge({ complexity }: ComplexityBadgeProps) {
  const config = complexityConfig[complexity];

  return (
    <div className="flex items-center gap-2 text-sm">
      <FiActivity
        size={14}
        className="text-text-tertiary shrink-0"
      />

      <span className={`flex items-center gap-1.5 font-medium ${config.color}`}>{config.label}</span>
    </div>
  );
}

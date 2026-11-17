import type { Position } from '@/src/types';
import { formatDate } from '@/src/lib/format-date';

interface PositionEntryProps {
  position: Position;
  isDateVisible?: boolean;
}

export function PositionEntry({ position, isDateVisible = false }: PositionEntryProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <p className="text-base md:text-lg font-semibold text-foreground">{position.position}</p>

        {isDateVisible && (
          <p className="text-xs text-text-tertiary font-medium tracking-wide uppercase">
            {`${formatDate(position.startDate)} — ${position.endDate ? formatDate(position.endDate) : 'Present'}`}
          </p>
        )}
      </div>

      {position.description && <p className="text-text-secondary text-sm leading-relaxed">{position.description}</p>}

      {position.bullets && (
        <ul className="list-inside list-disc text-text-secondary text-sm leading-relaxed space-y-1 marker:text-primary/40">
          {position.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {position.skills && (
        // The same quiet chips as the tags on blog posts
        <ul className="mt-1 flex flex-wrap gap-1.5">
          {position.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-text-secondary"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

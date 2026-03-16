import { Fragment } from 'react';
import type { Position } from '@/src/types';
import { formatDate } from '@/src/lib/format-date';
import Image from 'next/image';
import Link from 'next/link';
import { PositionEntry } from './position-entry';

type CompanyTimelineBlockProps = {
  company: string;
  companyDescription?: string;
  companyLogoPath: string;
  companyLink: string;
  positions: Position[];
  isLast: boolean;
  isFirst: boolean;
};

export function CompanyTimelineBlock({
  company,
  companyDescription,
  companyLogoPath,
  companyLink,
  positions,
  isLast,
  isFirst,
}: CompanyTimelineBlockProps) {
  const overallStart = positions[positions.length - 1].startDate;
  const overallEnd = positions[0].endDate;

  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="hidden relative flex-col items-center shrink-0 md:flex">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 shadow-[0_0_12px_var(--primary-glow)]">
          <Link
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-6 h-6 overflow-hidden"
          >
            <Image src={companyLogoPath} alt={company} fill className="object-contain" />
          </Link>
        </div>

        {!isLast && (
          <div className="w-px flex-1 bg-linear-to-b from-primary/30 via-border to-border" />
        )}
      </div>

      <div className="flex flex-col flex-1 pb-0 md:pb-14 gap-4">
        <div className="flex flex-col items-center shrink-0 md:hidden">
          {!isFirst && (
            <div className="w-px h-15 bg-linear-to-b form-border to-primary/30 via-border" />
          )}

          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 shadow-[0_0_12px_var(--primary-glow)]">
            <Link
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-6 h-6 overflow-hidden"
            >
              <Image src={companyLogoPath} alt={company} fill className="object-contain" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-0">
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-3">
            <Link
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              {company}
            </Link>

            <span className="text-xs text-text-tertiary uppercase">
              {formatDate(overallStart)} — {formatDate(overallEnd)}
            </span>
          </div>

          {companyDescription && (
            <p className="text-sm text-text-secondary leading-relaxed text-center md:text-left">
              {companyDescription}
            </p>
          )}
        </div>

        <div className="card-surface p-5 md:p-6 flex flex-col gap-8">
          {positions.map((position, i) => (
            <Fragment key={`${position.position}_${position.startDate}`}>
              {i > 0 && <hr className="border-border" />}
              <PositionEntry position={position} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { CSSProperties } from 'react';
import type { Project } from '@/src/types';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';

type ProjectSnippetProps = {
  project: Project;
};

export function ProjectSnippet({ project }: ProjectSnippetProps) {
  const isPreviewLeft = project.logoPlacement === 'left';

  return (
    <article
      className="card-surface group relative w-full max-w-5xl overflow-hidden rounded-3xl"
      style={{ '--accent': project.accent, '--glow-x': isPreviewLeft ? '20%' : '80%' } as CSSProperties}
    >
      <div
        aria-hidden
        className="showcase-glow pointer-events-none absolute inset-0"
      />

      <div className={cn('relative flex flex-col md:flex-row', isPreviewLeft && 'md:flex-row-reverse')}>
        <div className="flex flex-col gap-4 p-6 md:w-[45%] md:shrink-0 md:justify-center md:p-8">
          <div className="flex items-center gap-4">
            <Image
              src={project.logoPath}
              alt=""
              width={56}
              height={56}
              className="app-icon size-13 md:size-14"
            />

            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>

              <p className="text-sm text-text-tertiary">{project.platform}</p>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>

          <Link
            href={project.link}
            className="inline-flex items-center justify-between gap-2 text-sm font-medium text-background bg-foreground group-hover:bg-white/85 px-5 py-2.5 rounded-lg transition-colors mt-1 w-full md:w-fit after:absolute after:inset-0 after:z-10"
          >
            Explore {project.name}
            <FiArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="relative min-h-56 flex-1 sm:min-h-64 md:min-h-0">
          <div
            aria-hidden
            className={cn(
              'absolute top-4 md:top-8',
              project.previewBleed === 'bottom' && 'isolate overflow-hidden border border-white/10',
              project.previewBleed === 'bottom' &&
                (isPreviewLeft ? 'right-6 left-0 rounded-tr-xl md:right-10' : 'right-0 left-6 rounded-tl-xl md:left-10'),
              project.previewBleed === 'side' && 'w-[150%] sm:w-[120%] md:w-[140%] lg:w-[125%]',
              project.previewBleed === 'side' && (isPreviewLeft ? 'right-6 md:right-4' : 'left-6 md:left-4')
            )}
          >
            {project.preview}
          </div>
        </div>
      </div>
    </article>
  );
}

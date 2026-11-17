import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/src/types';
import { projects } from '@/src/consts/projects';
import { cn } from '@/src/lib/utils';
import { SectionHeading } from './section-heading';

type ProjectCardProps = {
  project: Project;
  isFeatured?: boolean;
};

// A small version of the project's banner. The featured one spans the row with its preview beside the text;
// the others are equal cards with the preview under the text, wide enough for a desktop app to show in full
function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      className={cn(
        'showcase showcase-card group relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/10',
        isFeatured ? 'h-[35rem] md:h-[34rem] md:flex-row' : 'h-[30rem] md:h-[27rem]'
      )}
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <div
        className={cn(
          'relative z-10 flex flex-col gap-3 p-6 md:p-8',
          isFeatured && 'md:w-1/2 md:shrink-0 md:justify-center md:p-12'
        )}
      >
        <div className="mb-2 flex items-center gap-4">
          <Image
            src={project.logoPath}
            alt=""
            width={72}
            height={72}
            className={cn(
              'app-icon shadow-[0_12px_32px_-12px_rgba(0,0,0,0.7)]',
              isFeatured ? 'size-16 shrink-0 md:size-18' : 'size-14 shrink-0'
            )}
          />

          <div className="flex min-w-0 flex-1 flex-col gap-2.5 *:[text-box:trim-both_cap_alphabetic]">
            <p className="text-xs font-medium tracking-[0.14em] text-white/60 uppercase">{project.platform}</p>
            <h3
              className={cn(
                'leading-none font-bold tracking-tight text-white',
                isFeatured ? 'text-4xl md:text-5xl' : 'text-3xl'
              )}
            >
              {project.name}
            </h3>
          </div>

          <span
            aria-hidden
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-white group-hover:text-black',
              isFeatured && 'md:hidden'
            )}
          >
            <FiArrowUpRight size={18} />
          </span>
        </div>

        <p className={cn('leading-relaxed text-white/75', isFeatured ? 'max-w-md text-base md:text-lg' : 'text-sm')}>
          {project.tagline}
        </p>

        {isFeatured && (
          <>
            <p className="hidden max-w-md text-sm leading-relaxed text-white/60 md:block">{project.description}</p>

            <span className="mt-4 hidden w-fit items-center gap-2 rounded-full white-pill px-6 py-3 text-sm font-semibold text-black md:inline-flex">
              Explore {project.name}
              <FiArrowRight size={16} />
            </span>
          </>
        )}
      </div>

      <div
        aria-hidden
        className="relative min-h-0 flex-1"
      >
        <div
          className={cn(
            'absolute inset-x-6 flex justify-center transition-transform duration-500 ease-out group-hover:-translate-y-2',
            project.cardPreviewClassName,
            isFeatured ? 'top-0 md:inset-x-8 md:top-10' : 'top-0 md:inset-x-8'
          )}
        >
          {project.preview}
        </div>
      </div>
    </Link>
  );
}

// Right under the greeting: Booply leads as a wide banner, the other projects follow as equal cards
export function ProjectsSection() {
  const [featured, ...others] = projects;

  return (
    <section
      id="work"
      className="w-full py-14 md:pt-12 md:pb-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:gap-14 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Projects"
            title="Things I build on my own"
          />

          <AllProjectsLink className="hidden md:inline-flex" />
        </div>

        <div className="flex flex-col gap-5">
          <ProjectCard
            project={featured}
            isFeatured
          />

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {others.map((project) => (
              <li key={project.name}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>

        <AllProjectsLink className="w-full md:hidden" />
      </div>
    </section>
  );
}

function AllProjectsLink({ className }: { className?: string }) {
  return (
    <Link
      href="/projects"
      className={cn(
        'group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-base font-semibold text-foreground transition-colors hover:bg-white/10',
        className
      )}
    >
      All projects
      <FiArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}

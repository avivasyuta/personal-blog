import type { Project } from '@/src/types';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

type ProjectSnippetProps = {
  project: Project;
};

export function ProjectSnippet({ project }: ProjectSnippetProps) {
  return (
    <div className="card-surface w-full max-w-4xl p-6 md:py-4 md:pl-3 md:pr-8">
      <div
        className={`flex flex-col-reverse md:flex-row justify-between items-center gap-6 ${project.logoPlacement === 'left' ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-4 items-center">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">{project.name}</h3>

            {project.openSource && (
              <span className="inline-flex items-center h-6 gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Open source
              </span>
            )}
          </div>

          <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">{project.description}</p>

          <Link
            href={project.link}
            className="inline-flex items-center justify-between gap-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-lg transition-colors mt-2 group w-full md:w-fit"
          >
            Learn more
            <FiArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="shrink-0">
          <Image
            src={project.logoPath}
            alt={project.name}
            width={250}
            height={250}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

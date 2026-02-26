import type { Project } from '@/src/types';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-surface w-full max-w-4xl p-6 md:p-8">
      <div className={`flex flex-col-reverse md:flex-row justify-between items-center gap-6 ${project.logoPlacement === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">{project.name}</h3>

          <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">{project.description}</p>

          <Link
            href={project.link}
            className="inline-flex items-center justify-between gap-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-lg transition-colors mt-2 group w-full md:w-fit"
          >
            Learn more
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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

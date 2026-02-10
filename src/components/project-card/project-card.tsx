import type { Project } from '@/src/types';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-4 relative max-w-4xl rounded-xl p-8">
      <div className={`flex justify-between items-center gap-4 ${project.logoPlacement === 'left' ? 'flex-row-reverse' : ''}`}>
        <div className="flex flex-col gap-3">
          <p className="text-lg md:text-2xl font-semibold text-white">{project.name}</p>

          <p className="whitespace-pre-line">{project.description}</p>

          <Link href={project.link} className="btn btn-lg self-start mt-4">Learn more</Link>
        </div>

        <Image
          src={project.logoPath}
          alt={project.name}
          width={300}
          height={50}
        />
      </div>
    </div>
  );
}

import type { Project } from '@/src/types';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
        <p className="text-lg md:text-xl font-semibold text-gray-900">{project.name}</p>

        <p className="text-normal text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">React</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">Typescript</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">React Bootstrap</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">Firebase</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">Express.js</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">PostgreSQL</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">Styled Components</p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium">Redux</p>
          </div>

          <Link href={project.link}>Learn more</Link>
        </div>
      </div>
    </div>
  );
}

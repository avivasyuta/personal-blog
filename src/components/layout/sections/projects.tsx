import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { ProjectSnippet } from '@/src/components/shared/project-snippet';
import { projects } from '@/src/consts/projects';

export function ProjectsSection() {
  return (
    <section
      className="w-full py-20 md:py-28 2xl:py-36 border-t border-border"
      id="work"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-3">
          <p className="section-label">Portfolio</p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Featured Projects</h2>
        </div>

        <div className="flex flex-col items-center gap-8">
          {projects.map((project) => (
            <ProjectSnippet
              key={project.name}
              project={project}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary text-sm font-medium hover:border-border-hover hover:text-foreground transition-all"
          >
            See all projects
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

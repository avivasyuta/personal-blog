import { ProjectSnippet } from '@/src/components/project-snippet';
import { projects } from '@/src/consts/projects';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-24">
      <h1 className="text-center md:text-start text-4xl font-bold tracking-tight mb-12">My projects</h1>

      <div className="flex flex-col items-center gap-8">
        {projects.map((project) => (
          <ProjectSnippet
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

import { Project } from '@/src/types';
import { ProjectCard } from '@/src/components/project-card';

const projects: Project[] = [
  {
    name: 'Mockiato',
    description: 'Extension',
    link: '/projects/mockiato',
  },
  {
    name: 'IMDB Random Movie',
    description: 'Extension',
    link: '/projects/imdb-random-movie',
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="work">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

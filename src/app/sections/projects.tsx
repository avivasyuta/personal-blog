import { Project } from '@/src/types';
import { ProjectCard } from '@/src/components/project-card';

const projects: Project[] = [
  {
    name: 'Mockiato',
    description: 'An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.',
    link: '/projects/mockiato',
    logoPath: '/logo/mockiato.png',
    logoPlacement: 'left',
  },
  {
    name: 'IMDB Random Movie',
    description: 'An open source Chrome extension that helps you discover new films by randomly selecting movies from IMDB watch list. Picks a random movie based on your preferences, making it easy to find your next watch. Perfect for movie nights when you can\'t decide what to watch.',
    link: '/projects/imdb-random-movie',
    logoPath: '/logo/imdb-random.png',
    logoPlacement: 'right',
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full py-20 md:py-28 2xl:py-36 border-t border-border" id="work">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-3">
          <p className="section-label">Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Featured Projects</h2>
        </div>

        <div className="flex flex-col items-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

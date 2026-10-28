import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '@/src/consts/projects';
import { Button } from '@/src/components/ui/button';

export function ProjectsSection() {
  return (
    <section
      className="w-full py-20 md:py-28 2xl:py-36 border-t border-border bg-[#020202]"
      id="work"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-3">
          <p className="section-label">Portfolio</p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Featured Projects</h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name}>
              <Link
                href={project.link}
                className="card-surface group flex h-full items-start gap-4 rounded-2xl p-5 hover:border-(--accent) md:p-6"
                style={{ '--accent': project.accent } as CSSProperties}
              >
                <Image
                  src={project.logoPath}
                  alt=""
                  width={56}
                  height={56}
                  className="app-icon size-12 shrink-0 md:size-14"
                />

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.name}</h3>

                    <FiArrowRight
                      size={16}
                      className="shrink-0 text-text-tertiary transition-all group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </div>

                  <p className="text-sm text-text-tertiary">{project.platform}</p>

                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{project.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Button href="/projects">
            All projects
            <FiArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

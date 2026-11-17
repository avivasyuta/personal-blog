import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { ShowcaseBackdrop, ShowcaseWatermark } from '@/src/components/shared/project-showcase';

type ProjectHeroProps = {
  name: string;
  platform: string;
  accent: string;
  logoPath: string;
  logoAlt: string;
  tagline: string;
  description: string;
  facts: string[];
  actions: ReactNode;
  preview: ReactNode;
};

// Buttons in the hero: one solid white, the rest glassy, like the projects carousel
export const heroPrimaryAction =
  'inline-flex items-center gap-2 rounded-full white-pill px-6 py-3 text-sm font-semibold text-black';
export const heroSecondaryAction =
  'inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20';

// The top of a project's page: the same full-screen banner as the project's slide in the carousel,
// so opening a project feels like stepping into it rather than onto a different page
export function ProjectHero({
  name,
  platform,
  accent,
  logoPath,
  logoAlt,
  tagline,
  description,
  facts,
  actions,
  preview,
}: ProjectHeroProps) {
  return (
    <section
      className="showcase relative isolate -mt-17 flex flex-col overflow-hidden pt-17 lg:min-h-[78svh]"
      style={{ '--accent': accent, '--dir': 1 } as CSSProperties}
    >
      <ShowcaseBackdrop />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 pt-8 pb-20 md:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:pb-16">
        <div className="relative z-10 flex flex-col gap-5">
          <span
            className="showcase-reveal w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.14em] text-white/80 uppercase"
            style={{ '--i': 0 } as CSSProperties}
          >
            {platform}
          </span>

          <div
            className="showcase-reveal flex items-center gap-4 md:gap-5"
            style={{ '--i': 1 } as CSSProperties}
          >
            <Image
              src={logoPath}
              alt={logoAlt}
              width={88}
              height={88}
              priority
              className="app-icon size-16 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] md:size-22"
            />
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl xl:text-7xl">{name}</h1>
          </div>

          <p
            className="showcase-reveal max-w-md text-lg leading-snug font-medium text-white md:text-xl"
            style={{ '--i': 2 } as CSSProperties}
          >
            {tagline}
          </p>

          <p
            className="showcase-reveal max-w-md text-sm leading-relaxed text-white/65 md:text-base"
            style={{ '--i': 3 } as CSSProperties}
          >
            {description}
          </p>

          <ul
            className="showcase-reveal flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/75"
            style={{ '--i': 4 } as CSSProperties}
          >
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-1.5"
              >
                <FiCheck
                  size={14}
                  className="text-white"
                />
                {fact}
              </li>
            ))}
          </ul>

          <div
            className="showcase-reveal mt-2 flex flex-wrap items-center gap-3"
            style={{ '--i': 5 } as CSSProperties}
          >
            {actions}
          </div>
        </div>

        <div className="showcase-stage relative flex w-full justify-center">{preview}</div>
      </div>
    </section>
  );
}

type ProjectFooterMarkProps = {
  name: string;
};

// The project's name in outlined letters closing its page, cut off by the footer like a signature.
// Sits last inside the page container, whose bottom padding it pulls in so it touches the footer
export function ProjectFooterMark({ name }: ProjectFooterMarkProps) {
  return (
    <div
      aria-hidden
      className="relative isolate -mb-16 h-[1.26em] overflow-hidden text-[19vw] md:-mb-24 lg:text-[15rem]"
      style={{ '--dir': 1 } as CSSProperties}
    >
      <ShowcaseWatermark
        name={name}
        className="text-[1em] lg:text-[1em]"
      />
    </div>
  );
}

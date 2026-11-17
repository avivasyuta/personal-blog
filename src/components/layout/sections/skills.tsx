import Image from 'next/image';
import { SectionHeading } from './section-heading';

type Skill = {
  name: string;
  imagePath: string;
  width?: number;
};

const skills: Skill[] = [
  {
    name: 'JavaScript',
    imagePath: '/logo/javascript.svg',
  },
  {
    name: 'TypeScript',
    imagePath: '/logo/typescript.svg',
  },
  {
    name: 'React',
    imagePath: '/logo/react.svg',
  },
  {
    name: 'Angular',
    imagePath: '/logo/angular.svg',
  },
  {
    name: 'Next.js',
    imagePath: '/logo/next-js.svg',
  },
  {
    name: 'Node.js',
    imagePath: '/logo/node-js.svg',
  },
  {
    name: 'Go',
    imagePath: '/logo/go.svg',
  },
  {
    name: 'PostgreSQL',
    imagePath: '/logo/postgres.svg',
  },
  {
    name: 'SCSS',
    // The "seal" version of the Sass logo, from sass-lang.com/styleguide/brand
    imagePath: '/logo/scss.png',
  },
  {
    name: 'Tailwind Css',
    imagePath: '/logo/tailwind.svg',
  },
  {
    name: 'Figma',
    imagePath: '/logo/figma.svg',
    width: 44,
  },
  {
    name: 'Git',
    imagePath: '/logo/git.svg',
  },
];

// A loose row of chips rather than a grid of big cards: the stack is context, not the main story
export function SkillsSection() {
  return (
    <section className="w-full py-14 md:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 md:gap-14 md:px-8">
        <SectionHeading
          label="Tech stack"
          title="Skills & technologies"
          align="center"
        />

        <ul className="flex max-w-4xl flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2.5 pr-5 pl-3 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <Image
                alt=""
                width={0}
                height={28}
                src={skill.imagePath}
                style={{ width: 'auto' }}
                className="h-7"
              />
              <span className="text-sm font-medium text-foreground md:text-base">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

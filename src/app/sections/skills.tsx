import Image from 'next/image';

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
    name: 'Next.js',
    imagePath: '/logo/next-js.svg',
  },
  {
    name: 'Node.js',
    imagePath: '/logo/node-js.svg',
  },
  {
    name: 'PostgreSQL',
    imagePath: '/logo/postgres.svg',
  },
  {
    name: 'Sass',
    imagePath: '/logo/sass.svg',
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

export function SkillsSection() {
  return (
    <section className="w-full py-20 md:py-28 2xl:py-36 border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-3">
          <p className="section-label">Tech Stack</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-surface flex flex-col items-center gap-3 p-6 group cursor-default"
            >
              <Image
                alt={skill.name}
                loading="lazy"
                width={0}
                height={48}
                decoding="async"
                src={skill.imagePath}
                style={{ width: 'auto' }}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <p className="text-text-secondary text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

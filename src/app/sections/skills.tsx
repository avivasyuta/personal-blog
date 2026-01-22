import Image from 'next/image';

type Skill = {
  name: string;
  imagePath: string;
  width?: number;
};

const skills: Skill[] = [
  {
    name: 'JavaScript',
    imagePath: '/icons/javascript.svg',
  },
  {
    name: 'TypeScript',
    imagePath: '/icons/typescript.svg',
  },
  {
    name: 'React',
    imagePath: '/icons/react.svg',
  },
  {
    name: 'Next.js',
    imagePath: '/icons/next-js.svg',
  },
  {
    name: 'Node.js',
    imagePath: '/icons/node-js.svg',
  },
  {
    name: 'PostgreSQL',
    imagePath: '/icons/postgres.svg',
  },
  {
    name: 'Sass',
    imagePath: '/icons/sass.svg',
  },
  {
    name: 'Tailwind Css',
    imagePath: '/icons/tailwind.svg',
  },
  {
    name: 'Figma',
    imagePath: '/icons/figma.svg',
    width: 44,
  },
  {
    name: 'Git',
    imagePath: '/icons/git.svg',
  },
];

export function SkillsSection() {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-5 md:gap-y-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <Image
                alt={skill.name}
                loading="lazy"
                width={0}
                height={64}
                decoding="async"
                src={skill.imagePath}
                style={{ width: 'auto' }}
              />

              <p className="text-normal text-base md:text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

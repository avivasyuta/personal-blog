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
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-20 md:px-8">
        <p className="text-normal text-lg md:text-3xl text-center uppercase">Skills and technologies I excel at</p>

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

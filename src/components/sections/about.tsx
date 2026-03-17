import Image from 'next/image';
import { Coffee, Code, Clock } from 'lucide-react';

const stats = [
  {
    value: '10+',
    label: 'Years of experience',
  },
  {
    value: '11+',
    label: 'Technologies',
  },
  {
    value: '∞',
    label: 'Cups of coffee',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 2xl:py-36 border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-95 w-[320px] md:h-115 md:w-95 lg:h-130 lg:w-110">
              <Image
                src="/photos/avatar.jpg"
                alt="Fullpose of Aleksei Ivasiuta"
                fill
                className="shadow-[0_0_40px_var(--color-primary-glow)] rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="flex max-w-xl flex-col gap-6">
            <h3 className="text-center md:text-left text-2xl md:text-3xl font-semibold tracking-tight">
              A little bit about me
            </h3>

            <div className="flex flex-col gap-4 text-text-secondary text-base leading-relaxed">
              <p>
                I&apos;m a developer who genuinely loves what he does. Over 10 years in and I still
                get that spark when starting a new project or solving a tricky problem. I work
                primarily with React, Node.js, and Go, building things that are fast, look great,
                and actually work well for real people.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll probably find me exploring new tools and
                technologies, tinkering with side projects, or traveling the world. I&apos;ve
                visited 20+ countries and counting. I&apos;m a firm believer that the best
                developers are the ones who never stop being curious.
              </p>

              <p>
                I care a lot about the details: clean code, smooth animations, pixel-perfect
                layouts. The kind of stuff users might not consciously notice, but definitely feel.
                That&apos;s what makes the difference between something good and something great.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="card-surface flex flex-col items-center gap-2 p-4">
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>

                  <p className="text-text-secondary text-xs text-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

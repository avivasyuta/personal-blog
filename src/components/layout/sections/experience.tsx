import type { CompanyGroup } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { PositionEntry } from '@/src/components/layout/company-timeline-block';
import { formatDate } from '@/src/lib/format-date';
import { SectionHeading } from './section-heading';

const workPlaces: CompanyGroup[] = [
  {
    company: 'Workato',
    companyDescription: 'Leading iPaaS platform, used by 21,000+ organizations',
    companyLogoPath: '/logo/workato.svg',
    companyLink: 'https://www.workato.com',
    positions: [
      {
        position: 'Senior Software Engineer',
        startDate: '2026/04',
        description: 'I develop a Low Code platform for building workflow apps, portals, and automation solutions.',
        skills: [
          'Angular',
          'Typescript',
          'RxJS',
          'MobX',
          'Vite',
          'Vitest',
          'Ruby on Rails',
          'PostgreSQL',
          'AWS Cloud',
          'Docker',
          'Kubernetes',
        ],
      },
    ],
  },
  {
    company: 'Tabby',
    companyDescription: 'Leading buy-now-pay-later platform in the Middle East and North Africa.',
    companyLogoPath: '/logo/tabby.svg',
    companyLink: 'https://tabby.ai',
    positions: [
      {
        position: 'Engineering Manager',
        startDate: '2025/08',
        endDate: '2025/12',
        description:
          'I Led a 9-person engineering team delivering Business Accounts, a fintech product enabling merchants to manage and spend BNPL earnings while unlocking new revenue streams beyond BNPL.',
        bullets: [
          'Established Agile processes, improved delivery predictability',
          'Led the rollout of automated payout flows, replacing a fully manual process and automating payouts for 90% of merchants.',
        ],
        skills: [
          'React',
          'Typescript',
          'Redux',
          'Vite',
          'Vitest',
          'Go',
          'PostgreSQL',
          'Google Cloud',
          'Docker',
          'Kubernetes',
          'Microservices',
          'People Management',
        ],
      },
    ],
  },
  {
    company: 'Avito',
    companyDescription: "The world's largest online classifieds platform with over 100+ million monthly users.",
    companyLogoPath: '/logo/avito.svg',
    companyLink: 'https://avito.ru',
    positions: [
      {
        position: 'Engineering Manager',
        startDate: '2022/09',
        endDate: '2025/07',
        description:
          'I lead a team of 10 professionals developing a no-code platform Bricks that allows for managing site and application markup within our company without the need to write or release new code.',
        bullets: [
          'I designed and prototyped a new platform from scratch, recruited a team, and led the development of critical features for the MLP, successfully launching into production. This enhancement now efficiently handles over 600,000 requests per minute on Avito, streamlining markup generation.',
          'The platform implementation reduced the Time to Market for major features from four weeks to two, a 50% reduction, and for minor features from two days to two hours, an 83% decrease.',
          'Mentored and upskilled team members, resulting in a measurable 20% increase in team competency scores, through targeted training and personalized development plans.',
        ],
        skills: [
          'React',
          'Typescript',
          'Redux',
          'Vite',
          'Vitest',
          'Go',
          'PostgreSQL',
          'Docker',
          'Kubernetes',
          'Microservices',
          'People Management',
        ],
      },
      {
        position: 'Senior Software Engineer',
        startDate: '2020/06',
        endDate: '2022/09',
        description:
          "I developed an advanced ad submission builder for sellers that enables customization of the ad posting process based on the ad's category, A/B testing, and various other parameters.",
        bullets: [
          'Increased the number of active listings by 20,000 and reduced customer support inquiries regarding ad formatting by 34%.',
          'Improved the application build process, cutting build times by 30%.',
          'By implementing notifications for charitable campaigns, I boosted company revenue by 2%.',
          'Introduced a client-side error tracking system, which halved the time needed to detect and fix errors.',
        ],
        skills: [
          'React',
          'Typescript',
          'Redux',
          'Webpack',
          'Jest',
          'Cypress',
          'Microfrontends',
          'Go',
          'PostgreSQL',
          'Microservices',
        ],
      },
    ],
  },
  {
    company: 'PJSC MTS Bank',
    companyDescription: 'Digital bank with 15M+ customers, part of the MTS telecommunications group.',
    companyLogoPath: '/logo/mts-bank.svg',
    companyLink: 'https://www.mtsbank.ru',
    positions: [
      {
        position: 'Frontend Team Lead',
        startDate: '2019/08',
        endDate: '2020/06',
        description:
          'Owned the frontend implementation of a modular form builder, translating complex financial workflows into elegant, data-driven user interactions.',
        bullets: [
          'Rolled out a unified design system, improving maintainability and brand consistency.',
          'Led the migration of a client-facing application from Bitrix24 to React and Next.js, resulting in a 60% improvement in page load performance.',
          'Designed and implemented CI/CD pipelines on Kubernetes to automate the build and deployment of the Next.js application.',
        ],
        skills: [
          'React',
          'Typescript',
          'Redux',
          'Next.js',
          'Gatsby',
          'Styled Components',
          'Webpack',
          'Docker',
          'Kubernetes',
        ],
      },
    ],
  },
  {
    company: 'Planeta.ru',
    companyDescription: "Russia's largest crowdfunding platform for creative and social projects.",
    companyLogoPath: '/logo/planeta.svg',
    companyLink: 'https://planeta.ru/',
    positions: [
      {
        position: 'Full Stack Engineer',
        startDate: '2015/07',
        endDate: '2019/09',
        description:
          'Owned the frontend implementation of a modular form builder, translating complex financial workflows into elegant, data-driven user interactions.',
        bullets: [
          'Key contributor to Russian largest crowdfunding platform, owning full-stack feature development and platform modernization.',
          'Migrated legacy codebase from Backbone.js to Angular 4, increasing performance and maintainability.',
        ],
        skills: [
          'Angular',
          'JavaScript',
          'Backbone',
          'Bootstrap',
          'Less',
          'Java',
          'Kotlin',
          'Spring Framework',
          'PostgreSQL',
          'Sphinx',
        ],
      },
    ],
  },
];

// The period a company covers, from the first position's start to the last one's end
function companyPeriod(group: CompanyGroup) {
  const start = group.positions[group.positions.length - 1].startDate;
  const end = group.positions[0].endDate;
  return `${formatDate(start)} — ${end ? formatDate(end) : 'Present'}`;
}

// One row per company, so the whole career fits on a screen; the current job starts open
export function ExperienceSection() {
  return (
    <section className="w-full py-14 md:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:gap-14 md:px-8">
        <SectionHeading
          label="Career"
          title="Work experience"
        />

        <ul className="border-y border-white/10">
          {workPlaces.map((group, index) => (
            <li
              key={group.company}
              className="border-white/10 not-first:border-t"
            >
              <details
                className="group/company"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 md:gap-6 md:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:size-14">
                    <Image
                      src={group.companyLogoPath}
                      alt=""
                      width={28}
                      height={28}
                      className="size-6 object-contain md:size-7"
                    />
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-lg font-semibold text-foreground md:text-2xl">{group.company}</span>
                    <span className="truncate text-sm text-text-secondary">
                      {group.positions.map((position) => position.position).join(' · ')}
                    </span>
                  </span>

                  <span className="hidden shrink-0 text-sm text-text-tertiary uppercase tabular-nums sm:block">
                    {companyPeriod(group)}
                  </span>

                  <FiChevronDown
                    size={20}
                    aria-hidden
                    className="shrink-0 text-text-tertiary transition-transform duration-300 group-open/company:rotate-180"
                  />
                </summary>

                <div className="flex flex-col gap-8 pb-8 md:pl-20">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-text-tertiary uppercase sm:hidden">{companyPeriod(group)}</p>
                    {group.companyDescription && (
                      <p className="text-text-secondary leading-relaxed">
                        {group.companyDescription}{' '}
                        <Link
                          href={group.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-white"
                        >
                          {new URL(group.companyLink).hostname.replace(/^www\./, '')}
                          <FiArrowUpRight size={14} />
                        </Link>
                      </p>
                    )}
                  </div>

                  {group.positions.map((position) => (
                    <PositionEntry
                      key={`${position.position}_${position.startDate}`}
                      position={position}
                      isDateVisible={group.positions.length > 1}
                    />
                  ))}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

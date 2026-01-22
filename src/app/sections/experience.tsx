import type { WorkExperience } from '@/src/types';
import { WorkExperienceCard } from '@/src/components/work-experience-card';

const workPlaces: WorkExperience[] = [
  {
    company: 'Tabby',
    companyLogoPath: '/logo/tabby.svg',
    companyLink: 'https://tabby.ai',
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
  {
    company: 'Avito',
    companyLogoPath: '/logo/avito.svg',
    companyLink: 'https://avito.ru',
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
    company: 'Avito',
    companyLogoPath: '/logo/avito.svg',
    companyLink: 'https://avito.ru',
    position: 'Senior Software Engineer',
    startDate: '2020/06',
    endDate: '2022/09',
    description:
      'I developed an advanced ad submission builder for sellers that enables customization of the ad posting process based on the ad’s category, A/B testing, and various other parameters.',
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
  {
    company: 'PJSC MTS Bank',
    companyLogoPath: '/logo/mts-bank.svg',
    companyLink: 'https://www.mtsbank.ru',
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
  {
    company: 'Planeta.ru',
    companyLogoPath: '/logo/planeta.svg',
    companyLink: 'https://planeta.ru/',
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
];

export function ExperienceSection() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-20 md:px-8">
        <p className="text-normal text-lg md:text-3xl text-center uppercase">My recent work experience</p>

        <div className="flex flex-col items-center gap-6">
          {workPlaces.map((workExperience) => (
            <WorkExperienceCard
              key={`${workExperience.company}_${workExperience.position}`}
              workExperience={workExperience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

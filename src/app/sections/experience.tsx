import type { WorkExperience } from '@/src/types';
import { WorkExperienceCard } from '@/src/components/work-experience-card';

const workPlaces: WorkExperience[] = [
  {
    company: 'Tabby',
    position: 'Engineering Manager',
    startDate: '2025/08',
    endDate: '2025/12',
    description: `
      - Led a 9-person engineering team delivering Business Accounts, a fintech product enabling merchants to manage and spend BNPL earnings while unlocking new revenue streams beyond BNPL.
      - Established Agile processes, improved delivery predictability
      - Led the rollout of automated payout flows, replacing a fully manual process and automating payouts for 90% of merchants.
    `,
  },
  {
    company: 'Avito',
    position: 'Engineering Manager',
    startDate: '2022/09',
    endDate: '2025/07',
    description: `
      I lead a team of 10 professionals developing a no-code platform Bricks that allows for managing site and application markup within our company without the need to write or release new code.
      
      — I designed and prototyped a new platform from scratch, recruited a team, and led the development of critical features for the MLP, successfully launching into production. This enhancement now efficiently handles over 600,000 requests per minute on Avito, streamlining markup generation.
      — The platform implementation reduced the Time to Market for major features from four weeks to two, a 50% reduction, and for minor features from two days to two hours, an 83% decrease.
      — Mentored and upskilled team members, resulting in a measurable 20% increase in team competency scores, through targeted training and personalized development plans.
    `,
  },
];

export function ExperienceSection() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        {workPlaces.map((workExperience) => (
          <WorkExperienceCard
            key={`${workExperience.company}_${workExperience.position}`}
            workExperience={workExperience}
          />
        ))}
      </div>
    </section>
  );
}

import type { WorkExperience } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';

type WorkExperienceCardProps = {
  workExperience: WorkExperience;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
  return (
    <div className="flex flex-col gap-4 relative w-full max-w-4xl shadow-md rounded-xl bg-white dark:bg-zinc-900 p-8">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{workExperience.position}</p>

          <div className="inline-flex gap-3 items-center">
            <Link href={workExperience.companyLink} target="_blank">
              {workExperience.company}
            </Link>

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gray-200"></span>

            <div>
              <span>{formatDate(workExperience.startDate)}</span> — <span>{formatDate(workExperience.endDate)}</span>
            </div>
          </div>
        </div>

        <Link
          href={workExperience.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-end relative overflow-hidden w-[100] h-[40]"
        >
          <Image src={workExperience.companyLogoPath} alt={workExperience.company} fill />
        </Link>
      </div>

      <div className="flex flex-col gap-3 text-gray-500">
        {workExperience.description && <p>{workExperience.description}</p>}

        {workExperience.bullets && (
          <ul className="list-inside list-disc">
            {workExperience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        {workExperience.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {workExperience.skills.map((skill) => (
              <div key={skill} className="badge badge-soft badge-info whitespace-nowrap">
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

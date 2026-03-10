import type { WorkExperience } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';

type WorkExperienceSnippetProps = {
  workExperience: WorkExperience;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export function WorkExperienceSnippet({ workExperience }: WorkExperienceSnippetProps) {
  return (
    <div className="card-surface relative w-full max-w-4xl p-6 md:p-8 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg md:text-xl font-semibold text-foreground">{workExperience.position}</p>

          <div className="inline-flex gap-3 items-center text-sm text-text-secondary">
            <Link
              href={workExperience.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors"
            >
              {workExperience.company}
            </Link>

            <span className="relative inline-flex h-1 w-1 rounded-full bg-text-tertiary"></span>

            <div>
              <span>{`${formatDate(workExperience.startDate)} — ${formatDate(workExperience.endDate)}`}</span>
            </div>
          </div>
        </div>

        <Link
          href={workExperience.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex justify-end relative overflow-hidden w-25 h-10 opacity-50 hover:opacity-80 transition-opacity"
        >
          <Image
            src={workExperience.companyLogoPath}
            alt={workExperience.company}
            fill
            className="object-right object-contain"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {workExperience.description && (
          <p className="text-text-secondary text-sm leading-relaxed">{workExperience.description}</p>
        )}

        {workExperience.bullets && (
          <ul className="list-inside list-disc text-text-secondary text-sm leading-relaxed space-y-1">
            {workExperience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        {workExperience.skills && (
          <div className="flex flex-wrap gap-2 mt-3">
            {workExperience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

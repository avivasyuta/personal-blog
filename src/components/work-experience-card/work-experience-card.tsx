import type { WorkExperience } from '@/src/types';

type WorkExperienceCardProps = {
  workExperience: WorkExperience;
};

export function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
  return (
    <div>
      <div>{workExperience.position}</div>

      <div>{workExperience.company}</div>

      <div>
        <span>{workExperience.startDate}</span>—<span>{workExperience.endDate}</span>
      </div>

      <div>{workExperience.description}</div>
    </div>
  );
}

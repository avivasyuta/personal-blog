import { GreetingSection } from './sections/greeting';
import { AboutSection } from '@/src/app/sections/about';
import { SkillsSection } from '@/src/app/sections/skills';
import { ExperienceSection } from '@/src/app/sections/experience';
import { ProjectsSection } from '@/src/app/sections/projects';
import { ContactsSection } from '@/src/app/sections/contacts';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <GreetingSection />

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <ProjectsSection />

      <ContactsSection />
    </main>
  );
}

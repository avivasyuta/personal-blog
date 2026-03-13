import { GreetingSection } from '../components/sections/greeting';
import { AboutSection } from '@/src/components/sections/about';
import { SkillsSection } from '@/src/components/sections/skills';
import { ExperienceSection } from '@/src/components/sections/experience';
import { ProjectsSection } from '@/src/components/sections/projects';
import { ContactsSection } from '@/src/components/sections/contacts';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <GreetingSection />

      <AboutSection />

      <ExperienceSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactsSection />
    </main>
  );
}

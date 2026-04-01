import {
  GreetingSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactsSection,
} from '@/src/components/layout/sections';

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

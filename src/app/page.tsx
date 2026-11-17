import {
  GreetingSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactsSection,
} from '@/src/components/layout/sections';

// About and Skills sit on tinted bands, so the sections alternate and each reads as its own
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <GreetingSection />

      <ProjectsSection />

      <div className="section-band w-full">
        <AboutSection />
      </div>

      <ExperienceSection />

      <div className="section-band w-full">
        <SkillsSection />
      </div>

      <ContactsSection />
    </main>
  );
}

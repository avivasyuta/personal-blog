import type { Metadata } from 'next';
import { ProjectShowcase } from '@/src/components/shared/project-showcase';
import { projects } from '@/src/consts/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Apps and developer tools by Aleksei Ivasiuta: Mockiato, an open source Chrome extension for mocking APIs, Meetbell, full-screen meeting alerts for macOS, and Booply, a pet health tracker for iOS.',
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="sr-only">My projects</h1>

      <ProjectShowcase projects={projects} />
    </>
  );
}

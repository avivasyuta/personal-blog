import { Project } from '@/src/types';

export const projects: Project[] = [
  {
    name: 'Mockiato',
    description:
      'An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.',
    link: '/projects/mockiato',
    logoPath: '/logo/mockiato.png',
    logoPlacement: 'left',
    openSource: true,
  },
  {
    name: 'Meetbell',
    description:
      'A macOS menu bar app that keeps your upcoming meetings in sight and shows a full-screen reminder when it is time to join, so you never miss a call again.',
    link: '/projects/meetbell',
    logoPath: '/meetbell/meetbell.svg',
    logoPlacement: 'right',
  },
];

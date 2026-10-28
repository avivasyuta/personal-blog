import Image from 'next/image';
import { Project } from '@/src/types';
import { MeetbellMenuBar } from '@/src/components/shared/meetbell-preview';

export const projects: Project[] = [
  {
    name: 'Mockiato',
    description:
      'An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.',
    tagline: 'Intercept requests, mock responses and add headers right in Chrome.',
    platform: 'Chrome extension',
    link: '/projects/mockiato',
    logoPath: '/mockiato/mockiato.svg',
    logoPlacement: 'left',
    accent: '#2f8cf0',
    preview: (
      <Image
        src="/mockiato/gallery/mocks-list.png"
        width={1071}
        height={694}
        alt="Mockiato mocks list"
        className="w-full h-auto"
      />
    ),
    previewBleed: 'side',
  },
  {
    name: 'Meetbell',
    description:
      'A macOS menu bar app that keeps your upcoming meetings in sight and shows a full-screen reminder when it is time to join, so you never miss a call again.',
    tagline: 'Full-screen meeting reminders from your Mac menu bar.',
    platform: 'macOS app',
    link: '/projects/meetbell',
    logoPath: '/meetbell/meetbell.png',
    logoPlacement: 'right',
    accent: '#1fc27a',
    preview: (
      <MeetbellMenuBar
        isOpen
        className="rounded-none border-0"
      />
    ),
    previewBleed: 'bottom',
  },
];

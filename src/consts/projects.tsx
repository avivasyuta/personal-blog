import Image from 'next/image';
import { Project } from '@/src/types';
import { MeetbellMenuBar } from '@/src/components/shared/meetbell-preview';
import { PhoneScreenshot } from '@/src/components/shared/phone-screenshot';

export const projects: Project[] = [
  {
    name: 'Booply',
    description:
      'An iOS app for keeping track of a pet’s health and daily care: medications on a schedule, meals, a wellness timeline and preventive care with due dates, for dogs and cats.',
    tagline: 'Medications, meals and wellness of your dog or cat in one app.',
    platform: 'iOS app',
    link: '/projects/booply',
    logoPath: '/booply/booply.png',
    accent: '#f0957f',
    // A fan of three phones; the middle one shows Home, the ones behind it today's doses and meals
    preview: (
      <div className="relative aspect-[4/5] w-[min(100%,34rem)] lg:w-[min(100%,34rem,calc((100svh-21rem)*0.8))]">
        <PhoneScreenshot
          src="/booply/screens/medications-today.png"
          alt="Booply medications for today"
          className="absolute top-10 left-0 w-[46%] -rotate-[8deg] rounded-[1.9rem] border-[5px] opacity-90"
        />
        <PhoneScreenshot
          src="/booply/screens/feeding-today.png"
          alt="Booply meals for today"
          className="absolute top-10 right-0 w-[46%] rotate-[8deg] rounded-[1.9rem] border-[5px] opacity-90"
        />
        <PhoneScreenshot
          src="/booply/screens/home.png"
          alt="Booply Home screen"
          className="absolute left-1/2 top-0 w-[56%] -translate-x-1/2 rounded-[2.2rem] border-[6px]"
        />
      </div>
    ),
  },
  {
    name: 'Mockiato',
    description:
      'An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.',
    tagline: 'Intercept requests, mock responses and add headers right in Chrome.',
    platform: 'Chrome extension',
    link: '/projects/mockiato',
    logoPath: '/mockiato/mockiato.svg',
    accent: '#2f8cf0',
    preview: (
      <Image
        src="/mockiato/gallery/mocks-list.png"
        width={1071}
        height={694}
        alt="Mockiato mocks list"
        className="h-auto w-full rounded-xl border border-white/15 shadow-2xl"
      />
    ),
    // The left part, the sidebar and the mocks list, runs off the card's right and bottom edges
    cardPreviewClassName: 'max-md:justify-start max-md:*:w-[180%] max-md:*:max-w-none max-md:*:shrink-0',
  },
  {
    name: 'Meetbell',
    description:
      'A macOS menu bar app that keeps your upcoming meetings in sight and shows a full-screen reminder when it is time to join, so you never miss a call again.',
    tagline: 'Full-screen meeting reminders from your Mac menu bar.',
    platform: 'macOS app',
    link: '/projects/meetbell',
    logoPath: '/meetbell/meetbell.png',
    accent: '#1fc27a',
    preview: (
      <MeetbellMenuBar
        isOpen
        className="h-[24rem] shadow-2xl md:h-[30rem]"
      />
    ),
    // Only the top right corner of the screen: the menu bar wider than the card runs off its left edge,
    // and the menu is narrower, so the desktop shows beside it
    cardPreviewClassName:
      'max-md:justify-end max-md:*:w-[150%] max-md:*:max-w-none max-md:*:shrink-0 max-md:[&_[data-menu]]:w-68',
  },
];

// The project's entry by name, so its page reuses the same preview as its slide in the carousel
export function getProject(name: string): Project {
  const project = projects.find((item) => item.name === name);
  if (!project) throw new Error(`Unknown project: ${name}`);
  return project;
}

import type { Metadata } from 'next';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import {
  FiBell,
  FiCalendar,
  FiClock,
  FiImage,
  FiLock,
  FiMail,
  FiMaximize,
  FiMonitor,
  FiSettings,
  FiShield,
  FiVideo,
} from 'react-icons/fi';
import { Button } from '@/src/components/ui/button';

export const metadata: Metadata = {
  title: 'Meetbell',
  description: 'A macOS menu bar app that reminds you about meetings with a full-screen alert.',
};

const supportEmail = 'avivasyuta@gmail.com';

const features: Array<{ icon: IconType; title: string; description: string }> = [
  {
    icon: FiCalendar,
    title: 'Calendar Sync',
    description:
      'Meetbell reads events straight from the calendars already connected to your Mac: iCloud, Google, Exchange and others. No extra accounts or sign-ins.',
  },
  {
    icon: FiClock,
    title: 'Menu Bar Agenda',
    description:
      'Click the bell in the menu bar to see ongoing meetings and everything coming up next, with start times and a live countdown.',
  },
  {
    icon: FiMaximize,
    title: 'Full-Screen Reminder',
    description:
      'When a meeting is about to start, Meetbell takes over the screen with the event details, so a reminder is impossible to miss behind other windows.',
  },
  {
    icon: FiVideo,
    title: 'One-Click Join',
    description:
      'If the event contains a video call link (Zoom, Google Meet, Microsoft Teams and more), join the meeting right from the reminder.',
  },
  {
    icon: FiSettings,
    title: 'Flexible Settings',
    description:
      'Choose which calendars to follow, pick a reminder sound, and decide how many minutes before the start the reminder should appear.',
  },
  {
    icon: FiLock,
    title: 'Private by Design',
    description:
      'Your calendar data never leaves your Mac. Meetbell works fully on-device: no analytics, no tracking, no servers.',
  },
];

const steps = [
  {
    title: 'Grant calendar access',
    description: 'Allow Meetbell to read your calendars and pick the ones you want to follow.',
  },
  {
    title: 'Keep an eye on the menu bar',
    description: 'Your agenda for the day lives behind the bell icon, with a countdown to the next meeting.',
  },
  {
    title: 'Join on time',
    description: 'A full-screen reminder appears before each meeting. Join the call or dismiss it in one click.',
  },
];

// TODO: add real screenshots to /public/meetbell/gallery and render them like on the Mockiato page
const galleryImages = [
  { title: 'Menu Bar Agenda', alt: 'Meetbell menu bar dropdown with upcoming meetings' },
  { title: 'Full-Screen Reminder', alt: 'Meetbell full-screen meeting reminder' },
  { title: 'Settings', alt: 'Meetbell settings window' },
];

const details = [
  { label: 'Platform', value: 'macOS 14 Sonoma or later' },
  { label: 'Price', value: 'Free' },
  { label: 'Data collected', value: 'None' },
  { label: 'Status', value: 'Coming soon' },
];

const upcomingEvents = [
  { title: 'Daily Standup', time: '10:00 – 10:15', countdown: 'Now', isCurrent: true },
  { title: 'Design Review', time: '11:30 – 12:30', countdown: 'in 1h 12m' },
  { title: '1:1 with Anna', time: '14:00 – 14:30', countdown: 'in 3h 42m' },
];

function MenuBarPreview() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-sm font-semibold text-foreground">Today</span>
        <FiBell
          size={14}
          className="text-primary"
        />
      </div>

      <ul className="flex flex-col p-2">
        {upcomingEvents.map((event) => (
          <li
            key={event.title}
            className={`flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 ${event.isCurrent ? 'bg-primary/10' : ''}`}
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{event.title}</span>
              <span className="text-xs text-text-tertiary">{event.time}</span>
            </div>

            <span className={`text-xs font-medium ${event.isCurrent ? 'text-primary' : 'text-text-secondary'}`}>
              {event.countdown}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MeetbellProjectPage() {
  return (
    <div className="mx-auto flex flex-col gap-16 md:gap-16 w-full max-w-7xl px-4 md:px-8 py-8 md:py-24">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
        <div className="flex flex-col gap-6 flex-1 items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Meetbell</h1>

          <Image
            src="/meetbell/meetbell.svg"
            width={160}
            height={160}
            alt="Meetbell app icon"
            className="md:hidden"
          />

          <p className="text-center md:text-start text-text-secondary leading-relaxed">
            A lightweight macOS menu bar app that keeps your upcoming meetings in sight and makes sure you never miss
            one. When it is time to meet, Meetbell shows a full-screen reminder with a button to join the call right
            away.
          </p>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
            <FiMonitor size={12} />
            macOS app
          </span>

          <div className="flex justify-center md:justify-start gap-3 mt-2">
            {/* TODO: replace with an App Store link once the app is published */}
            <Button
              variant="primary"
              disabled
            >
              <FiBell size={14} />
              Coming soon to the App Store
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-6">
          <Image
            src="/meetbell/meetbell.svg"
            width={160}
            height={160}
            alt="Meetbell app icon"
          />

          <MenuBarPreview />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                <Icon
                  size={18}
                  className="text-primary"
                />
              </div>

              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>

          <p className="text-sm md:text-base text-text-secondary">Set it up once and forget about missed meetings.</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface/50"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold">
                {index + 1}
              </span>

              <h3 className="font-semibold text-foreground">{step.title}</h3>

              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h2>

          <p className="text-sm md:text-base text-text-secondary">
            A quick look at Meetbell: the menu bar agenda, the full-screen reminder, and the settings window.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm"
            >
              <div
                role="img"
                aria-label={image.alt}
                className="flex aspect-video flex-col items-center justify-center gap-2 text-text-tertiary"
              >
                <FiImage size={28} />
                <span className="text-xs">Screenshot coming soon</span>
              </div>

              <div className="px-4 py-3 border-t border-border">
                <h3 className="text-left text-sm font-medium text-foreground">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Details</h2>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col gap-1 p-5 rounded-xl border border-border bg-surface/50"
            >
              <dt className="text-xs uppercase tracking-wide text-text-tertiary">{detail.label}</dt>
              <dd className="text-sm font-medium text-foreground">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 via-surface/80 to-amber-500/5 p-8 md:p-10">
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-400 to-orange-600 shadow-lg shadow-primary/20">
            <FiMail
              size={28}
              className="text-white"
            />
          </div>

          <div className="flex flex-col gap-2 text-center md:text-left flex-1">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Questions or feedback?</h2>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
              Found a bug or have an idea for Meetbell? Drop me a line, I read every message.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              href={`mailto:${supportEmail}?subject=Meetbell`}
              variant="primary"
              size="lg"
            >
              <FiMail size={16} />
              {supportEmail}
            </Button>

            <Button
              href="/projects/meetbell/privacy"
              size="lg"
            >
              <FiShield size={16} />
              Privacy Policy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

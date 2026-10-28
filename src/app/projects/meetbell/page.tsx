import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import { FiBarChart2, FiCheck, FiLock, FiMail, FiServer, FiUserX } from 'react-icons/fi';
import { Button } from '@/src/components/ui/button';
import {
  MeetbellCalendars,
  MeetbellDemo,
  MeetbellJoin,
  MeetbellMenuBarSettings,
  MeetbellNotificationSettings,
} from '@/src/components/shared/meetbell-preview';
import { supportEmail } from '@/src/consts/contacts';

export const metadata: Metadata = {
  title: 'Meetbell',
  description: 'A macOS menu bar app that reminds you about meetings with a full-screen alert.',
};

const accent = '#1fc27a';

const facts = ['macOS 14 Sonoma or later', 'Free', 'No data collected'];

const privacyPoints = [
  { label: 'No accounts', icon: <FiUserX size={14} /> },
  { label: 'No analytics', icon: <FiBarChart2 size={14} /> },
  { label: 'No servers', icon: <FiServer size={14} /> },
];

const callServices = ['Zoom', 'Google Meet', 'Microsoft Teams'];

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

const features: Array<{ title: string; description: string; fragment: ReactNode }> = [
  {
    title: 'Join the call from the reminder',
    description: `If the event has a video call link, the reminder shows a join button. Works with ${callServices.join(', ')}.`,
    fragment: <MeetbellJoin />,
  },
  {
    title: 'Follow only the calendars that matter',
    description:
      'Meetbell reads the calendars already connected to your Mac: iCloud, Google, Exchange and others. Turn off the ones you do not want to be reminded about, like birthdays or a shared family calendar.',
    fragment: <MeetbellCalendars />,
  },
  {
    title: 'Keep the next meeting in the menu bar',
    description:
      'Show the next event and the time until it starts right next to the bell, and let Meetbell launch when you log in.',
    fragment: <MeetbellMenuBarSettings />,
  },
  {
    title: 'Decide when the reminder appears',
    description:
      'Show the reminder right at the start or a few minutes earlier, and pick the sound that plays with it. The alert covers every connected display.',
    fragment: <MeetbellNotificationSettings />,
  },
];

export default function MeetbellProjectPage() {
  return (
    <div
      className="relative isolate mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 py-8 md:gap-32 md:px-8 md:py-24"
      style={{ '--accent': accent } as CSSProperties}
    >
      <div
        aria-hidden
        className="page-light"
      />

      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/meetbell/meetbell.png"
            width={72}
            height={72}
            alt="Meetbell app icon"
            className="app-icon"
          />

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Meetbell</h1>

            <p className="text-xl md:text-2xl leading-snug text-foreground">
              A full-screen reminder for every meeting on your Mac.
            </p>

            <p className="text-text-secondary leading-relaxed max-w-prose">
              Meetbell sits in the menu bar with your agenda and a countdown to the next meeting. When it is time, it
              covers the screen so the reminder cannot hide behind other windows.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-text-secondary">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-1.5"
              >
                <FiCheck
                  size={14}
                  style={{ color: accent }}
                />
                {fact}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-2">
            {/* TODO: replace with an App Store link once the app is published */}
            <span
              aria-disabled
              className="inline-flex cursor-default items-center gap-2 rounded-xl border border-white/30 bg-black py-1.5 pr-5 pl-3.5 text-white"
            >
              <FaApple size={30} />

              <span className="flex flex-col items-start text-left leading-none">
                <span className="text-[11px] font-medium">Coming soon on the</span>
                <span className="text-[22px] font-semibold tracking-tight">App Store</span>
              </span>
            </span>
          </div>
        </div>

        <MeetbellDemo />
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Set it up the way you work</h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="card-surface flex flex-col gap-8 overflow-hidden rounded-3xl p-6 md:p-8"
            >
              <div
                aria-hidden
                className="flex items-center justify-center md:min-h-68"
              >
                {feature.fragment}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{feature.title}</h3>

                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>

        <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-3 border-t border-white/10 pt-8"
            >
              <span
                className="absolute -top-4 left-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-black"
                style={{ backgroundColor: accent }}
              >
                {index + 1}
              </span>

              <h3 className="font-semibold text-foreground">{step.title}</h3>

              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative isolate flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_70%)] px-6 py-14 text-center md:py-20">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-(--accent) ring-1 ring-[color-mix(in_srgb,var(--accent)_35%,transparent)]">
          <FiLock size={28} />
        </span>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Nothing leaves your Mac</h2>

          <p className="max-w-xl text-lg text-text-secondary leading-relaxed">
            Meetbell has no accounts, analytics or servers. Your calendar is read on your device and stays there.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-2">
          {privacyPoints.map(({ label, icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground"
            >
              <span className="text-(--accent)">{icon}</span>
              {label}
            </li>
          ))}
        </ul>

        <Link
          href="/projects/meetbell/privacy"
          className="w-fit text-sm font-medium underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
        >
          Read the privacy policy
        </Link>
      </section>

      <section className="card-surface relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div
          aria-hidden
          className="showcase-glow pointer-events-none absolute inset-0"
        />

        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Questions or feedback?</h2>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
              Found a bug or have an idea for Meetbell? Write to me, I read every message.
            </p>
          </div>

          <Button
            href={`mailto:${supportEmail}?subject=Meetbell`}
            size="lg"
            className="shrink-0"
          >
            <FiMail size={16} />
            {supportEmail}
          </Button>
        </div>
      </section>
    </div>
  );
}

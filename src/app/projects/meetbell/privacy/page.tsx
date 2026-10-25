import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Meetbell Privacy Policy',
  description: 'Meetbell does not collect, store, or share any personal data.',
};

const supportEmail = 'avivasyuta@gmail.com';

const sections = [
  {
    title: 'Data collection',
    content:
      'Meetbell does not collect, store, or transmit any personal data. The app has no user accounts, analytics, crash reporting, advertising, or tracking of any kind.',
  },
  {
    title: 'Calendar access',
    content:
      'Meetbell asks for permission to read your calendars so it can show upcoming events in the menu bar and remind you when a meeting starts. Calendar data is read through the system Calendar framework and processed only on your Mac. It is never sent to the developer or any third party.',
  },
  {
    title: 'Settings',
    content:
      'Your preferences, such as the selected calendars, reminder sound, and reminder timing, are stored locally on your Mac and are removed when you delete the app.',
  },
  {
    title: 'Video call links',
    content:
      'When you choose to join a meeting, Meetbell opens the video call link from the event in your default browser or the corresponding app. Meetbell does not send any data to video call services itself.',
  },
  {
    title: 'Third-party services',
    content: 'Meetbell does not use any third-party SDKs or services and does not share data with anyone.',
  },
  {
    title: 'Changes to this policy',
    content:
      'If this policy changes, the updated version will be published on this page together with a new effective date.',
  },
];

export default function MeetbellPrivacyPage() {
  return (
    <div className="mx-auto flex flex-col gap-10 w-full max-w-3xl px-4 md:px-8 py-8 md:py-24">
      <Link
        href="/projects/meetbell"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors w-fit"
      >
        <FiArrowLeft size={14} />
        Back to Meetbell
      </Link>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Meetbell Privacy Policy</h1>

        <p className="text-sm text-text-tertiary">Effective date: October 25, 2026</p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>

            <p className="text-text-secondary leading-relaxed">{section.content}</p>
          </section>
        ))}

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>

          <p className="text-text-secondary leading-relaxed">
            If you have any questions about this policy, contact me at{' '}
            <a
              href={`mailto:${supportEmail}?subject=Meetbell%20Privacy`}
              className="text-primary hover:text-primary-hover transition-colors"
            >
              {supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

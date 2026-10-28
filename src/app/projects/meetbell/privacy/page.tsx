import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { supportEmail } from '@/src/consts/contacts';

export const metadata: Metadata = {
  title: 'Meetbell Privacy Policy',
  description:
    'Meetbell does not collect, store on any server, share, or sell your data. Everything stays on your Mac.',
};

export default function MeetbellPrivacyPage() {
  return (
    <div
      className="relative isolate mx-auto flex flex-col gap-10 w-full max-w-3xl px-4 md:px-8 py-8 md:py-24"
      style={{ '--accent': '#1fc27a' } as CSSProperties}
    >
      <div
        aria-hidden
        className="page-light"
        style={{ left: '50%', right: 'auto', width: 'min(80rem, 100vw)', transform: 'translateX(-50%)' }}
      />

      <Link
        href="/projects/meetbell"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors w-fit"
      >
        <FiArrowLeft size={14} />
        Back to Meetbell
      </Link>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Meetbell Privacy Policy</h1>

        <p className="text-sm text-text-tertiary">Effective date: October 28, 2026</p>
      </div>

      <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover">
        <p>
          Meetbell is developed and maintained by Aleksei Ivasiuta, an independent developer (&quot;I&quot;,
          &quot;me&quot;). I am responsible for how information related to Meetbell is handled.
        </p>

        <p>
          Meetbell is a macOS menu bar app that shows a full-screen reminder when your meetings are about to start. This
          policy explains what information Meetbell uses, how it uses it, and what it does not do.
        </p>

        <p>
          <strong>The short version:</strong> Meetbell does not collect, store on any server, share, or sell your data.
          Everything stays on your Mac.
        </p>

        <h2>Information Meetbell accesses</h2>

        <h3>Calendar data</h3>

        <p>
          To show your upcoming events and remind you about meetings, Meetbell asks for access to your calendars through
          the standard macOS permission dialog. With your permission, it reads on your Mac:
        </p>

        <ul>
          <li>the list of your calendars (name, color, account they belong to);</li>
          <li>
            events from today until the end of tomorrow: title, start and end time, location, notes, URL, organizer, and
            number of attendees.
          </li>
        </ul>

        <p>
          Meetbell uses this data <strong>only on your Mac</strong> to:
        </p>

        <ul>
          <li>show your events in the menu bar dropdown;</li>
          <li>show the full-screen reminder;</li>
          <li>
            find an online meeting link (for example Zoom, Google Meet, Microsoft Teams, or Webex) so you can join with
            one click.
          </li>
        </ul>

        <p>
          Meetbell <strong>does not change, create, or delete</strong> your calendar events. It does not copy your
          calendar data to any server, and it does not keep it after the app quits.
        </p>

        <p>
          You can turn calendar access on or off at any time in{' '}
          <strong>System Settings → Privacy &amp; Security → Calendars</strong>.
        </p>

        <h3>Settings</h3>

        <p>
          Meetbell saves your preferences on your Mac using standard macOS storage (UserDefaults). These include the
          calendars you selected, the notification sound, how early to notify you, menu bar display options, and whether
          notifications are paused. These settings never leave your Mac.
        </p>

        <h2>What Meetbell does not do</h2>

        <ul>
          <li>
            It does <strong>not</strong> collect personal data or usage data.
          </li>
          <li>
            It does <strong>not</strong> use analytics, advertising, or tracking of any kind.
          </li>
          <li>
            It does <strong>not</strong> include third-party SDKs.
          </li>
          <li>
            It does <strong>not</strong> connect to the internet on its own. The app runs in Apple&apos;s App Sandbox
            without network access.
          </li>
          <li>
            It does <strong>not</strong> share or sell any information to anyone.
          </li>
        </ul>

        <h2>Actions you start yourself</h2>

        <p>
          Some actions open other apps on your Mac. What those apps do with your data is covered by their own privacy
          policies:
        </p>

        <ul>
          <li>
            <strong>Join</strong> opens the meeting link in your default browser or in the meeting app (for example Zoom
            or Microsoft Teams).
          </li>
          <li>
            <strong>Opening an event</strong> opens it in the Calendar app.
          </li>
          <li>
            <strong>Send Feedback</strong> opens a new email in your default email app. The draft includes the Meetbell
            version and the macOS version to help with troubleshooting. You can review or delete this information before
            sending. Nothing is sent unless you send the email yourself. If you do, I will use your email address and
            message only to reply and to improve the app.
          </li>
        </ul>

        <h2>Data retention and deletion</h2>

        <p>
          <strong>Calendar data.</strong> Meetbell reads your calendar data only while it is running and keeps it in
          memory. Nothing is written to disk or sent anywhere, so there is nothing to delete. To stop Meetbell from
          reading your calendars, turn off its access in{' '}
          <strong>System Settings → Privacy &amp; Security → Calendars</strong>.
        </p>

        <p>
          <strong>Settings.</strong> Your preferences are stored only on your Mac, inside the app&apos;s sandbox
          container. To remove them completely:
        </p>

        <ol>
          <li>Quit Meetbell and move it from the Applications folder to the Trash.</li>
          <li>
            In Finder, choose <strong>Go → Go to Folder…</strong>, enter{' '}
            <code>~/Library/Containers/dev.ivasiuta.meetbell</code> and move that folder to the Trash.
          </li>
        </ol>

        <p>If you turned on Launch at Login, macOS removes Meetbell from your login items when the app is deleted.</p>

        <p>
          <strong>Feedback emails.</strong> If you email me, your message and email address are stored in my email
          account (Gmail, provided by Google, which handles them under its own{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>
          ). I keep this correspondence only as long as needed to answer you and follow up on your request, and no
          longer than 2 years. You can ask me to delete it at any time by writing to{' '}
          <a href={`mailto:${supportEmail}?subject=Meetbell%20Privacy`}>{supportEmail}</a>.
        </p>

        <h2>Your rights</h2>

        <p>
          The only personal data I may receive is what you send me by email. Depending on where you live (for example,
          in the European Union, the United Kingdom, or California), you may have the right to:
        </p>

        <ul>
          <li>ask what information I hold about you;</li>
          <li>ask me to correct or delete it;</li>
          <li>object to or restrict how I use it.</li>
        </ul>

        <p>
          To make a request, email <a href={`mailto:${supportEmail}?subject=Meetbell%20Privacy`}>{supportEmail}</a>. I
          will reply within 30 days. I process your email only to respond to your request (legitimate interest), and I
          never use it for marketing. If you are in the EU or the UK, you also have the right to lodge a complaint with
          your local data protection authority.
        </p>

        <h2>Diagnostics</h2>

        <p>
          Meetbell writes technical log messages (for example, errors) to the standard macOS system log on your Mac.
          These logs do not include the contents of your calendar, such as event titles or attendees, and Meetbell does
          not send them anywhere.
        </p>

        <p>
          If you have chosen to share analytics with app developers in{' '}
          <strong>System Settings → Privacy &amp; Security → Analytics &amp; Improvements</strong>, Apple may give me
          anonymous crash and performance reports. Apple handles these reports under its own{' '}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>
          .
        </p>

        <h2>Children&apos;s privacy</h2>

        <p>Meetbell does not knowingly collect any information from anyone, including children under 13.</p>

        <h2>Changes to this policy</h2>

        <p>If this policy changes, the updated version will be posted on this page with a new effective date.</p>

        <h2>Contact</h2>

        <p>
          If you have questions about this policy or about Meetbell, please email{' '}
          <a href={`mailto:${supportEmail}?subject=Meetbell%20Privacy`}>
            <strong>{supportEmail}</strong>
          </a>
          .
        </p>
      </div>
    </div>
  );
}

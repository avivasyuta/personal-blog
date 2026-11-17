import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { supportEmail } from '@/src/consts/contacts';

export const metadata: Metadata = {
  title: 'Booply Privacy Policy',
  description:
    'Booply keeps your pet’s data on your iPhone and in your own iCloud. I don’t run servers, show ads or track you.',
};

const privacyMailto = `mailto:${supportEmail}?subject=Booply%20Privacy`;

export default function BooplyPrivacyPage() {
  return (
    <div
      className="relative isolate mx-auto flex flex-col gap-10 w-full max-w-3xl px-4 md:px-8 py-8 md:py-24"
      style={{ '--accent': '#f0957f' } as CSSProperties}
    >
      <div
        aria-hidden
        className="page-light"
        style={{ left: '50%', right: 'auto', width: 'min(80rem, 100vw)', transform: 'translateX(-50%)' }}
      />

      <Link
        href="/projects/booply"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors w-fit"
      >
        <FiArrowLeft size={14} />
        Back to Booply
      </Link>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Booply Privacy Policy</h1>

        <p className="text-sm text-text-tertiary">Effective date: November 17, 2026</p>
      </div>

      <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover">
        <p>
          Booply is developed and maintained by Aleksei Ivasiuta, an independent developer (&quot;I&quot;,
          &quot;me&quot;). I am responsible for how information related to Booply is handled.
        </p>

        <p>
          Booply is an iOS app for keeping track of a dog&apos;s or cat&apos;s health and daily care. This policy
          explains what information the app works with, where it is kept, who can see it, and what the app does not do.
        </p>

        <p>
          <strong>The short version:</strong> everything you record in Booply stays on your devices and in your own
          iCloud account. I don&apos;t run any servers, I can&apos;t see your pets&apos; data, and Booply has no ads,
          analytics, or tracking. The only service besides Apple&apos;s that Booply talks to is RevenueCat, which
          handles Booply Premium purchases and receives no information about your pets.
        </p>

        <h2>What you record in Booply</h2>

        <p>Booply stores the information you enter about your pets, for example:</p>

        <ul>
          <li>the pet&apos;s profile: name, photo, species, breed, sex, birth date, and microchip number;</li>
          <li>weight history and body measurements;</li>
          <li>medications, their schedules and the doses you mark as given;</li>
          <li>the feeding plan and the meals you log;</li>
          <li>
            wellness entries such as stool, vomiting, behavior and tooth brushing, with notes and photos you attach;
          </li>
          <li>flea &amp; tick treatments, deworming, and vaccinations;</li>
          <li>your app settings, such as reminders, language, and widgets on the Home screen.</li>
        </ul>

        <p>
          This data is about your pets, not about you, but notes and photos can contain anything you put in them. You
          decide what to enter. Only a few basics are needed to create a pet (name, species, sex and weight); everything
          else is optional.
        </p>

        <h2>Where your data is kept</h2>

        <h3>On your device</h3>

        <p>
          Booply saves everything in the app&apos;s private storage on your iPhone or iPad. Other apps can&apos;t read
          it, and it is protected by iOS data protection while your device is locked.
        </p>

        <h3>In your iCloud account</h3>

        <p>
          If you are signed in to iCloud, Booply keeps your data in sync across your devices through Apple&apos;s
          CloudKit, in the <strong>private database of your own iCloud account</strong>. The contents of your records
          are saved in CloudKit&apos;s encrypted fields, and photos are saved as files in your iCloud. This data is
          stored by Apple under the{' '}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Apple Privacy Policy
          </a>{' '}
          and counts toward your iCloud storage. I have no access to it.
        </p>

        <p>
          If you are not signed in to iCloud, or turn off iCloud for Booply in{' '}
          <strong>Settings → [your name] → iCloud</strong>, your data stays only on that device.
        </p>

        <h2>Sharing a pet</h2>

        <p>
          You can share a pet with family or a pet sitter. Sharing uses Apple&apos;s iCloud sharing: you send an
          invitation link yourself (by message, email, or any app you choose), and the person who accepts it can see and
          edit everything about that pet on their own device, including its photos and history. Entries they add are
          saved in your iCloud.
        </p>

        <ul>
          <li>
            Apple shows the people in a share each other&apos;s names as they appear in their Apple Account, so you see
            who has access, and they see whose pet it is.
          </li>
          <li>
            You can remove a person or stop sharing at any time in the pet&apos;s profile. When a sitter&apos;s access
            period ends, the pet disappears from their app, and Booply removes them from the share the next time your
            app syncs.
          </li>
          <li>A person you shared a pet with can leave at any time. Your data stays with you.</li>
          <li>
            People you share a pet with can see until when your Premium is active, because sharing a pet relies on it.
          </li>
        </ul>

        <p>
          Only share a pet with people you trust: once they have access, they can see its records and photos and could
          keep their own copies, for example as screenshots.
        </p>

        <h2>Booply Premium and RevenueCat</h2>

        <p>
          Booply Premium is sold as a subscription and as a one-time purchase through the App Store. Apple processes the
          payment. I never see your name, email address, or payment details.
        </p>

        <p>
          To know whether you have Premium on all your devices, Booply uses{' '}
          <a
            href="https://www.revenuecat.com/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            RevenueCat
          </a>
          , a service that checks App Store purchases. RevenueCat receives:
        </p>

        <ul>
          <li>
            an anonymous identifier for your account. When you use iCloud, this is the identifier iCloud gives Booply
            for your account, which is different in every app and doesn&apos;t reveal your Apple Account, name, or email
            address. Without iCloud, it is a random identifier created on your device;
          </li>
          <li>your App Store purchase and subscription history for Booply;</li>
          <li>
            technical information that comes with each request, such as the app version, iOS version, device model, your
            store country and currency, and your IP address.
          </li>
        </ul>

        <p>
          This information is used only to unlock Premium, restore purchases, and let me see how the app is sold (for
          example, how many subscriptions there are). It is not used for advertising or tracking, and RevenueCat
          receives nothing you record about your pets. In test versions of the app distributed through TestFlight,
          RevenueCat also stores a mark that you are a beta tester.
        </p>

        <h2>Permissions and access</h2>

        <ul>
          <li>
            <strong>Camera</strong>, to take photos for your pet&apos;s wellness entries and to scan a microchip number
            from its label. The number is recognized on your device, and the camera image used for scanning is not
            saved.
          </li>
          <li>
            <strong>Photos</strong>: Booply doesn&apos;t ask for access to your photo library. When you choose a
            picture, iOS shows its own picker and gives Booply only the photos you pick.
          </li>
          <li>
            <strong>Notifications</strong>, to remind you about doses, meals, and birthdays. These reminders are
            scheduled on your device and don&apos;t pass through any server. They show your pet&apos;s name and what is
            due, which can appear on your lock screen. You can change this in <strong>Settings → Notifications</strong>.
          </li>
        </ul>

        <p>You can turn camera and notification access on or off at any time in the Settings app.</p>

        <h2>Files you export</h2>

        <p>
          Booply can create a <strong>backup file</strong> with all your pets&apos; data and a{' '}
          <strong>health report</strong> (a PDF for your vet). Both are made on your device. They leave it only when you
          save or send them yourself, and whoever receives them can read everything inside. Pets that other people share
          with you are not included in your backups.
        </p>

        <h2>What Booply does not do</h2>

        <ul>
          <li>
            It does <strong>not</strong> have accounts or ask you to sign in.
          </li>
          <li>
            It does <strong>not</strong> send your pets&apos; data to me or to any server of mine.
          </li>
          <li>
            It does <strong>not</strong> use analytics, advertising, or tracking of any kind, and doesn&apos;t follow
            you across other apps or websites.
          </li>
          <li>
            It does <strong>not</strong> share or sell any information to anyone.
          </li>
          <li>
            It does <strong>not</strong> use your location, contacts, or health data from the Health app.
          </li>
        </ul>

        <h2>Data retention and deletion</h2>

        <p>
          Your data is kept until you delete it. You can delete a single entry or a pet in the app, or everything at
          once with <strong>Settings → Delete All Data</strong> in Booply. With iCloud on, deleting removes the data
          from your iCloud and from all your devices. Deleting a pet someone shared with you only removes it from your
          devices and leaves the share.
        </p>

        <p>
          Deleting the app removes the data from that device, but the copy in your iCloud remains, so it comes back if
          you install Booply again. To remove it too, use Delete All Data before deleting the app, or go to{' '}
          <strong>Settings → [your name] → iCloud → Manage Account Storage</strong> on your iPhone and delete
          Booply&apos;s data there.
        </p>

        <p>
          RevenueCat keeps your purchase records as described in its privacy policy, and Apple keeps your App Store
          purchase history. To have RevenueCat&apos;s records about you deleted, email me and I will ask RevenueCat to
          delete them.
        </p>

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
          longer than 2 years. You can ask me to delete it at any time.
        </p>

        <h2>Your rights</h2>

        <p>
          The data about your pets is in your own hands: you can view, change, export, and delete it in the app at any
          time. The only personal data I may hold is what RevenueCat keeps about your purchases and what you send me by
          email. Depending on where you live (for example, in the European Union, the United Kingdom, or California),
          you may have the right to:
        </p>

        <ul>
          <li>ask what information I hold about you;</li>
          <li>ask me to correct or delete it;</li>
          <li>object to or restrict how I use it.</li>
        </ul>

        <p>
          To make a request, email <a href={privacyMailto}>{supportEmail}</a>. I will reply within 30 days. I process
          purchase information to provide what you bought (performance of a contract) and emails to respond to you
          (legitimate interest), and I never use either for marketing. If you are in the EU or the UK, you also have the
          right to lodge a complaint with your local data protection authority.
        </p>

        <h2>Diagnostics</h2>

        <p>
          Booply writes technical log messages (for example, errors) to the standard iOS system log on your device.
          These logs don&apos;t include what you record about your pets, and Booply doesn&apos;t send them anywhere.
        </p>

        <p>
          If you have chosen to share analytics with app developers in{' '}
          <strong>Settings → Privacy &amp; Security → Analytics &amp; Improvements</strong>, Apple may give me anonymous
          crash and performance reports. If you test Booply through TestFlight, Apple may also share the feedback and
          crash reports you send with me. Apple handles these reports under its own{' '}
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

        <p>
          Booply is not directed at children under 13 and does not knowingly collect personal information from them.
        </p>

        <h2>Changes to this policy</h2>

        <p>
          If this policy changes, the updated version will be posted on this page with a new effective date. If a change
          affects how your data is handled, I will also mention it in the app&apos;s release notes.
        </p>

        <h2>Contact</h2>

        <p>
          If you have questions about this policy or about Booply, please email{' '}
          <a href={privacyMailto}>
            <strong>{supportEmail}</strong>
          </a>
          .
        </p>
      </div>
    </div>
  );
}

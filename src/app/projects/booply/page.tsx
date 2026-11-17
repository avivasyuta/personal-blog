import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import { FiCheck, FiDownload, FiSmartphone } from 'react-icons/fi';
import { LuBell, LuDownload, LuPawPrint, LuScale, LuSparkles, LuUtensils } from 'react-icons/lu';
import { PhoneScreenshot } from '@/src/components/shared/phone-screenshot';
import { ProjectFooterMark, ProjectHero } from '@/src/components/shared/project-hero';
import { getProject } from '@/src/consts/projects';
import { supportEmail } from '@/src/consts/contacts';
import { EmailButton } from '@/src/components/shared/email-button';
import { cn } from '@/src/lib/utils';

export const metadata: Metadata = {
  title: 'Booply',
  description:
    'An iOS app for keeping track of your dog or cat: medications, meals, stool and wellness, flea & tick, deworming and vaccinations.',
};

const accent = '#f0957f';

const facts = ['iPhone and iPad', 'Free, with Premium', 'English and Russian'];

const privacyPoints = [
  { label: 'Stored on your device', icon: <FiSmartphone size={14} /> },
  { label: 'No ads', icon: <LuPawPrint size={14} /> },
  { label: 'Backup to a file you keep', icon: <FiDownload size={14} /> },
];

const features: Array<{ title: string; description: string; bullets: string[]; screenshot: string }> = [
  {
    title: 'Medications that run on schedule',
    description:
      'Add a course once and Booply plans every dose. Mark a dose with a tap, and the calendar shows which days went as planned.',
    bullets: [
      'Daily, every few days, on chosen weekdays or as needed',
      'Fractional dosages like 1 ¼ tablets',
      'Archive finished courses and keep their history',
    ],
    screenshot: '/booply/screens/medications-today.png',
  },
  {
    title: 'A wellness timeline for the vet',
    description:
      'Everything you log ends up in one timeline, so when the vet asks what happened this week, the answer is already there.',
    bullets: [
      'Stool on the Purina fecal score, vomiting and behavior',
      'Feedings, tooth brushing and medication doses',
      'Category filters, a month calendar and photos',
    ],
    screenshot: '/booply/screens/wellness.png',
  },
  {
    title: 'Preventive care on time',
    description:
      'Flea & tick, deworming and vaccinations with protection periods. Booply shows what is still valid and what is due soon.',
    bullets: [
      'Vaccines from a catalog of real products, or typed by hand',
      'Protection tracked per disease: a combined vaccine renews all of them',
      'Reminders before protection runs out',
    ],
    screenshot: '/booply/screens/care.png',
  },
];

const extras: Array<{ title: string; description: string; icon: ReactNode }> = [
  {
    title: 'Feeding plan',
    description: 'Plan meals at set times with foods and grams, then log how much was eaten and the appetite.',
    icon: <LuUtensils size={18} />,
  },
  {
    title: 'Weight and measurements',
    description: 'Weight history with a chart and body measurements for choosing a harness.',
    icon: <LuScale size={18} />,
  },
  {
    title: 'Reminders',
    description: 'Notifications for doses, meals, preventive care and birthdays.',
    icon: <LuBell size={18} />,
  },
  {
    title: 'Backup',
    description: 'Export all your pets to a file and restore them on a new device.',
    icon: <LuDownload size={18} />,
  },
];

// `showsBottom` lifts the phone so its bottom, where the feature is, sits inside the card instead of running off it;
// `paper` is a page of the real PDF the feature makes, shown instead of a screen
const premiumFeatures: Array<{
  title: string;
  description: string;
  screenshot?: string;
  showsBottom?: boolean;
  paper?: string;
}> = [
  {
    title: 'Several pets',
    description: 'Keep track of every dog and cat in your home and switch between them in one tap.',
    screenshot: '/booply/screens/pets.png',
  },
  {
    title: 'Health report for the vet',
    description:
      'Pick the period and what to include, and get a PDF with the pet’s details, medications, care and history.',
    paper: '/booply/screens/report-page.png',
  },
  {
    title: 'Photos in entries',
    description: 'Attach a photo to a poop or vomit entry to show the vet what happened, not just describe it.',
    screenshot: '/booply/screens/photo-entry.png',
    showsBottom: true,
  },
  {
    title: 'Shared care',
    description:
      'Invite family or a pet sitter to care for your pet on their own iPhone; a sitter’s access ends by itself.',
    screenshot: '/booply/screens/sharing.png',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to care for one pet.',
    features: [
      'One pet',
      'Medications, feeding, wellness and preventive care',
      'Reminders',
      'Weight history and measurements',
      'Full history and backup',
    ],
    isHighlighted: false,
  },
  {
    name: 'Premium',
    price: 'Yearly or Lifetime',
    description: 'For homes with several pets and frequent vet visits.',
    features: ['Everything in Free', 'Several pets', 'Health report for the vet as a PDF', 'Photos in entries'],
    isHighlighted: true,
  },
];

export default function BooplyProjectPage() {
  return (
    <>
      <ProjectHero
        name="Booply"
        platform="iOS app"
        accent={accent}
        logoPath="/booply/booply.png"
        logoAlt="Booply app icon"
        tagline="Your pet’s health and daily care in one place."
        description="Booply keeps track of medications, meals, wellness and preventive care for your dogs and cats. Today’s doses and meals wait on the Home screen, so marking them takes a single tap."
        facts={facts}
        preview={getProject('Booply').preview}
        actions={
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black py-1.5 pr-5 pl-3.5 text-white/80">
            <FaApple size={30} />

            <span className="flex flex-col items-start text-left leading-none">
              <span className="text-[11px] font-medium">Coming soon to the</span>
              <span className="text-[22px] font-semibold tracking-tight">App Store</span>
            </span>
          </div>
        }
      />

      <div
        className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 pt-8 pb-16 md:gap-32 md:px-8 md:pb-24"
        style={{ '--accent': accent } as CSSProperties}
      >
        <section className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={cn(
                'relative flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16 lg:gap-24',
                index % 2 === 1 && 'md:flex-row-reverse'
              )}
            >
              <div className="relative flex max-w-xl flex-1 flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h2>

                <p className="text-text-secondary leading-relaxed">{feature.description}</p>

                <ul className="mt-2 flex flex-col gap-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <FiCheck
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: accent }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative w-full max-w-64 md:max-w-72 md:shrink-0">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-[10%] md:inset-x-[-40%] bottom-[20%] -z-10 bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_22%,transparent),transparent)]"
                />

                <div className="h-[26rem] overflow-hidden mask-b-from-60% md:h-[34rem]">
                  <PhoneScreenshot
                    src={feature.screenshot}
                    alt={feature.title}
                    className="w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">And a little more</h2>

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {extras.map((extra) => (
              <li
                key={extra.title}
                className="flex flex-col gap-3 border-t border-white/10 pt-6"
              >
                <span className="flex size-9 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-(--accent)">
                  {extra.icon}
                </span>

                <h3 className="font-semibold text-foreground">{extra.title}</h3>

                <p className="text-sm text-text-secondary leading-relaxed">{extra.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] px-3 py-1 text-xs font-semibold tracking-wider text-(--accent) uppercase">
              <LuSparkles aria-hidden />
              Premium
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              More with{' '}
              <span className="bg-linear-to-r from-(--accent) to-[#ffd3a8] bg-clip-text text-transparent">
                Booply Premium
              </span>
            </h2>

            <p className="text-text-secondary leading-relaxed">
              Everything else is free. Premium adds more pets, the vet report, photos and shared care.{' '}
              <a
                href="#pricing"
                className="whitespace-nowrap text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                See pricing
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {premiumFeatures.map((feature) => (
              <article
                key={feature.title}
                className="relative isolate flex flex-col overflow-hidden rounded-3xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_-16px_rgba(0,0,0,0.8)] border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[radial-gradient(80%_70%_at_0%_0%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_70%),linear-gradient(180deg,#151518_0%,#111114_100%)] sm:flex-row lg:min-h-[28rem]"
              >
                <div className="relative z-10 flex flex-col gap-3 p-6 sm:w-1/2 sm:justify-center md:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{feature.title}</h3>

                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>

                <div
                  className={cn(
                    'relative h-[24rem] sm:h-auto sm:min-h-[26rem] sm:flex-1',
                    !feature.paper && 'overflow-hidden'
                  )}
                >
                  {feature.paper ? (
                    <Image
                      src={feature.paper}
                      width={989}
                      height={1400}
                      alt="First page of the PDF health report"
                      className="absolute top-8 left-1/2 w-[19rem] -translate-x-1/2 rotate-3 rounded-md bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.9)]"
                    />
                  ) : feature.screenshot ? (
                    <PhoneScreenshot
                      src={feature.screenshot}
                      alt={feature.title}
                      className="absolute left-1/2 w-68 -translate-x-1/2 sm:right-6 sm:left-auto sm:translate-x-0"
                      style={feature.showsBottom ? { bottom: '2rem' } : { top: '2rem' }}
                    />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="flex flex-col gap-10"
          id="pricing"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>

            <p className="text-text-secondary leading-relaxed max-w-prose">
              Booply is free for one pet. Premium is a yearly subscription or a one-time Lifetime purchase, and what you
              made with it stays yours if it ends.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  'accent-surface relative flex flex-col gap-6 overflow-hidden rounded-3xl p-6 md:p-8',
                  plan.isHighlighted && 'border-[color-mix(in_srgb,var(--accent)_40%,transparent)]'
                )}
              >
                {plan.isHighlighted && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_100%_0%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_70%)]"
                  />
                )}

                <div className="relative flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>

                  <p className="text-3xl font-bold tracking-tight">{plan.price}</p>

                  <p className="text-sm text-text-secondary">{plan.description}</p>
                </div>

                <ul className="relative flex flex-col gap-3 border-t border-white/10 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <FiCheck
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: accent }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="relative isolate flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--accent)_18%,transparent)] bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_70%)] px-6 py-14 text-center md:py-20">
          <Image
            src="/booply/mascot-cat-happy.png"
            width={96}
            height={96}
            alt=""
            className="size-20 object-contain"
          />

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your pet’s records stay with you</h2>

            <p className="max-w-xl text-lg text-text-secondary leading-relaxed">
              Everything you log is kept on your iPhone. Export a backup file whenever you like and restore it on a new
              device.
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
            href="/projects/booply/privacy"
            className="w-fit text-sm font-medium underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            Read the privacy policy
          </Link>
        </section>

        <section className="accent-surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Questions or feedback?</h2>

              <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
                Found a bug or have an idea for Booply? Write to me, I read every message.
              </p>
            </div>

            <EmailButton
              email={supportEmail}
              subject="Booply"
            />
          </div>
        </section>

        <ProjectFooterMark name="Booply" />
      </div>
    </>
  );
}

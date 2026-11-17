import type { CSSProperties } from 'react';
import { ShowcaseBackdrop } from '@/src/components/shared/project-showcase';
import { EmailButton } from '@/src/components/shared/email-button';
import { SocialLinks } from './social-links';

const email = 'avivasyuta@gmail.com';

// Closes the page with the same orange banner it opens with
export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="w-full px-4 pt-10 pb-24 md:px-8 md:pb-32"
    >
      <div
        className="showcase showcase-card relative isolate mx-auto flex w-full max-w-7xl flex-col items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center md:py-24"
        style={{ '--accent': '#f97316' } as CSSProperties}
      >
        <ShowcaseBackdrop fadesOut={false} />

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-medium tracking-[0.14em] text-white/70 uppercase">Get in touch</p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white text-balance md:text-6xl">
            Looking for a developer or want to connect?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <EmailButton email={email} />

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

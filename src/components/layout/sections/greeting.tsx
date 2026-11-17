import type { CSSProperties } from 'react';
import Image from 'next/image';
import { FiDownload, FiMapPin } from 'react-icons/fi';
import { currentLocation } from '@/src/lib/constant';
import { ShowcaseBackdrop } from '@/src/components/shared/project-showcase';
import { SocialLinks } from './social-links';

// The site's own orange, so the greeting is a banner like the projects' but clearly the author's
const accent = '#f97316';

export function GreetingSection() {
  return (
    <section
      id="greeting"
      className="showcase relative isolate -mt-17 flex min-h-[100svh] w-full flex-col overflow-hidden pt-17 lg:h-[100svh] lg:pb-17"
      style={{ '--accent': accent, '--dir': 1 } as CSSProperties}
    >
      <ShowcaseBackdrop />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent from-45% to-[#020202] to-75% lg:bg-linear-to-r lg:from-35% lg:to-[#020202] lg:to-70%"
      />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 pt-8 pb-0 md:px-8 md:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-12 lg:py-0">
        <div className="relative z-10 flex flex-col gap-6">
          <span
            className="showcase-reveal w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.14em] text-white/80 uppercase"
            style={{ '--i': 0 } as CSSProperties}
          >
            Software Engineer
          </span>

          <h1
            className="showcase-reveal text-[2.75rem] leading-[1.05] font-bold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
            style={{ '--i': 1 } as CSSProperties}
          >
            Hi, I’m{' '}
            <span className="whitespace-nowrap">
              Aleksei <span className="inline-block animate-waving">👋</span>
            </span>
          </h1>

          <p
            className="showcase-reveal max-w-xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
            style={{ '--i': 2 } as CSSProperties}
          >
            I build fast, accessible and good-looking products with React, Node.js and Go. Ten years in, and it still
            feels like something new.
          </p>

          <div
            className="showcase-reveal flex flex-col gap-2 text-sm text-white/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5"
            style={{ '--i': 3 } as CSSProperties}
          >
            <span className="flex items-center gap-2">
              <FiMapPin size={16} />
              {`${currentLocation.city}, ${currentLocation.country}`}
            </span>

            <span className="flex items-center gap-2">
              <span className="flex size-4 items-center justify-center">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
              </span>
              Available for new opportunities
            </span>
          </div>

          <div
            className="showcase-reveal mt-2 flex items-center gap-2 sm:flex-wrap sm:gap-3"
            style={{ '--i': 4 } as CSSProperties}
          >
            <a
              href="/Ivasiuta Aleksei CV. Senior Software Engineer.pdf"
              download
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full white-pill px-5 text-sm font-semibold whitespace-nowrap text-black sm:flex-none sm:px-6"
            >
              <FiDownload size={16} />
              Download my CV
            </a>

            <SocialLinks />
          </div>
        </div>

        <div className="showcase-stage relative flex justify-center lg:justify-end">
          <Image
            src="/photos/portrait.png"
            width={500}
            height={500}
            alt="Aleksei Ivasiuta"
            priority
            className="w-full max-w-[34rem] mask-b-from-70% mask-b-to-100% lg:max-w-[min(34rem,calc(100svh-9rem))]"
          />
        </div>
      </div>
    </section>
  );
}

import { currentLocation } from '@/src/lib/constant';
import { Download, Github, Instagram, Linkedin, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function GreetingSection() {
  return (
    <section
      id="greeting"
      className="relative w-full py-10 md:py-28 2xl:py-36"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex items-center justify-center md:order-last md:grow md:justify-end">
            <Image
              src="/photos/portrait.png"
              width={280}
              height={320}
              alt="Aleksei Ivasiuta"
              className="shadow-[0_0_40px_var(--color-primary-glow)] rounded-2xl"
            />
          </div>

          <div className="flex max-w-3xl grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-4">
              <p className="section-label">Software Engineer</p>

              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
                Hi, I&apos;m <span className="text-gradient-accent">Aleksei</span>{' '}
                <span className="inline-block animate-waving">👋</span>
              </h1>

              <p className="text-text-secondary text-base leading-relaxed md:text-lg">
                I&apos;m a software engineer (React.js, Node.js & Go) with a focus on creating and designing exceptional
                digital experiences that are fast, accessible, visually appealing, and responsive.
              </p>

              <p className="text-text-secondary text-base leading-relaxed md:text-lg">
                Even though I have been creating web applications for over 10 years, I still love it as if it was
                something new.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin
                  size={18}
                  className="text-primary"
                />

                <p className="text-sm">{`${currentLocation.city}, ${currentLocation.country}`}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  </span>
                </div>

                <p className="text-sm text-text-secondary">Available for new opportunities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/Ivasiuta Aleksei CV. Senior Software Engineer.pdf"
                download
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 py-4 md:py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_20px_var(--color-primary-glow)]"
              >
                <Download size={16} />
                Download my CV
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/in/avivasyuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 md:h-10 max-sm:flex-1 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                  title="Aleksei's Linkedin profile"
                >
                  <Linkedin size={18} />
                </Link>

                <Link
                  href="https://github.com/avivasyuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 md:h-10 max-sm:flex-1 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                  title="Aleksei's Github profile"
                >
                  <Github size={18} />
                </Link>

                <Link
                  href="https://www.instagram.com/avivasyuta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 md:h-10 max-sm:flex-1 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                  title="Aleksei's Instagram profile"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

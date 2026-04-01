import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="w-full py-20 md:py-28 2xl:py-36 border-t border-border"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Get in Touch</h2>
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="text-text-secondary text-base max-w-lg text-center leading-relaxed">
            Looking for a developer or want to connect? Reach out!
          </p>

          <a
            href="mailto:avivasyuta@gmail.com"
            className="group flex items-center gap-3 card-surface px-6 py-4"
          >
            <FiMail
              size={20}
              className="text-primary"
            />

            <span className="text-lg md:text-xl font-mono font-medium text-foreground transition-colors group-hover:text-primary">
              avivasyuta@gmail.com
            </span>
          </a>

          <div className="flex flex-col items-center gap-4">
            <p className="text-text-tertiary text-sm">You may also find me on these platforms</p>

            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/in/avivasyuta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                title="Aleksei's Linkedin profile"
              >
                <FiLinkedin size={18} />
              </Link>

              <Link
                href="https://github.com/avivasyuta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                title="Aleksei's Github profile"
              >
                <FiGithub size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/avivasyuta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                title="Aleksei's Instagram profile"
              >
                <FiInstagram size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

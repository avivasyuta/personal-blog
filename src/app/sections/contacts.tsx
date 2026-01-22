import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function ContactsSection() {
  return (
    <section id="contacts" className="w-full bg-gray py-16 md:py-20 2xl:py-24 bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            Looking for a developer or want to connect? Reach out!
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-2">
              <Mail size={24} />

              <h2 className="text-lg md:text-2xl font-semibold">avivasyuta@gmail.com</h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-normal text-base text-center">You may also find me on these platforms!</p>

            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/in/avivasyuta"
                target="_blank"
                className="btn btn-sm btn-square"
                title="Aleksei's Linkedin profile"
              >
                <Linkedin size={16} />
              </Link>

              <Link
                href="https://github.com/avivasyuta"
                target="_blank"
                className="btn btn-sm btn-square"
                title="Aleksei's Github profile"
              >
                <Github size={16} />
              </Link>

              <Link
                href="https://www.instagram.com/avivasyuta/"
                target="_blank"
                className="btn btn-sm btn-square"
                title="Aleksei's Instagram profile"
              >
                <Instagram size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

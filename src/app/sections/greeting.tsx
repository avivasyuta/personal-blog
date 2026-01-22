import { currentLocation } from '@/src/lib/constant';
import { Github, Linkedin, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function GreetingSection() {
  return (
    <section id="greeting" className="relative w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex items-center justify-center md:order-last md:grow md:justify-end">
            <div className="relative h-75 w-70 md:h-90 md:w-[320px]">
              <Image src="/avatar.png" width={280} height={320} alt="Aleksei Ivasiuta" />
            </div>
          </div>

          <div className="flex max-w-3xl grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl lg:text-6xl dark:text-gray-100">
                Hi, I&apos;m Aleksei <span className="inline-block animate-waving">👋</span>
              </h1>

              <p className="text-normal text-base">
                I&apos;m a full stack developer (React.js, Node.js & Go) with a focus on creating and designing
                exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
              </p>

              <p className="text-normal text-base">
                Even though I have been creating web applications for over 10 years, I still love it as if it was
                something new.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin className="text-gray-600 dark:text-gray-300" />

                <p className="text-normal text-base">
                  {currentLocation.city}, &nbsp;
                  {currentLocation.country}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>

                <p className="text-normal text-base">Available for new opportunities</p>
              </div>
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

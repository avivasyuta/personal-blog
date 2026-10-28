'use client';

import { type CSSProperties, type ReactNode, useState } from 'react';
import Image from 'next/image';
import { FiCheck, FiExternalLink, FiGithub, FiHeart, FiStar } from 'react-icons/fi';
import { Modal } from '@/src/components/ui/modal';
import { Button } from '@/src/components/ui/button';
import { MockiatoMockForm, MockiatoMocksList, MockiatoRequestHeaders } from '@/src/components/shared/mockiato-preview';

const accent = '#2f8cf0';

const chromeStoreUrl = 'https://chromewebstore.google.com/detail/mockiato-%E2%80%94-free-api-testi/ilbkkhmnmnehcicempfpekgcpneeekao';
const githubRepoUrl = 'https://github.com/avivasyuta/mockiato';

const facts = ['Chrome extension', 'Free and open source', 'No proxy or config files'];

const galleryImages = [
  {
    src: '/mockiato/gallery/mocks-list.png',
    alt: 'Mockiato response mocks grouped into collections',
    title: 'Response Mocks',
  },
  {
    src: '/mockiato/gallery/mocks-form-general.png',
    alt: 'Mockiato mock editor with URL, method, status code and delay',
    title: 'Mock Settings',
  },
  {
    src: '/mockiato/gallery/mock-form-response.png',
    alt: 'Mockiato mock editor with a JSON response body',
    title: 'Response Body',
  },
  {
    src: '/mockiato/gallery/mocks-form-headers.png',
    alt: 'Mockiato mock editor with response headers',
    title: 'Response Headers',
  },
  {
    src: '/mockiato/gallery/headers-list.png',
    alt: 'Mockiato request headers list',
    title: 'Request Headers',
  },
  {
    src: '/mockiato/gallery/headers-form.png',
    alt: 'Mockiato form for adding a request header to a specific URL',
    title: 'Request Header Settings',
  },
];

const features: Array<{ title: string; description: string; fragment: ReactNode }> = [
  {
    title: 'Replace any response with your own',
    description:
      'Match requests by URL (regular expressions supported) and HTTP method, then return the body, status code, headers and delay you need. Test error states and slow networks without touching the backend.',
    fragment: <MockiatoMockForm />,
  },
  {
    title: 'Add headers to outgoing requests',
    description:
      'Attach or override headers on the fly to test authentication, feature flags, localization or CORS behavior.',
    fragment: <MockiatoRequestHeaders />,
  },
  {
    title: 'Works right in the browser',
    description:
      'No proxy servers, config files or CLI tools. Install the extension and see which requests are mocked straight away.',
    fragment: <MockiatoMocksList />,
  },
];

export default function MockiatoProjectPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <div
      className="relative isolate mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 py-8 md:gap-32 md:px-8 md:py-24"
      style={{ '--accent': accent } as CSSProperties}
    >
      <div
        aria-hidden
        className="page-light"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="flex flex-col gap-6">
          <Image
            src="/mockiato/mockiato.svg"
            width={72}
            height={72}
            alt="Mockiato extension logo"
            className="rounded-2xl"
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Mockiato</h1>

            <p className="text-xl md:text-2xl leading-snug text-foreground">
              Mock any API response right in your browser.
            </p>

            <p className="text-text-secondary leading-relaxed max-w-prose">
              An open source Chrome extension for frontend developers. Intercept outgoing requests in real time and
              replace them with your own responses, no backend required.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-1.5"
              >
                <FiCheck
                  size={14}
                  style={{ color: accent }}
                />
                {fact}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-2">
            <Button
              href={chromeStoreUrl}
              target="_blank"
              className="border-transparent bg-foreground text-background hover:border-transparent hover:bg-white/85 hover:text-background"
            >
              <FiExternalLink size={14} />
              Install extension
            </Button>

            <Button
              href={githubRepoUrl}
              target="_blank"
            >
              <FiGithub size={14} />
              Source code
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div
            aria-hidden
            className="absolute inset-[10%] -z-10 rounded-full blur-3xl"
            style={{ backgroundColor: `${accent}40` }}
          />

          <Image
            src="/mockiato/gallery/mocks-list.png"
            width={1071}
            height={694}
            alt="Mockiato mocks list"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What you can do</h2>

        <div className="flex flex-col">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="grid grid-cols-1 items-center gap-8 border-t border-white/10 py-10 md:grid-cols-2 md:gap-16"
            >
              <div className="flex flex-col gap-3 max-w-md">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{feature.title}</h3>

                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>

              <div
                aria-hidden
                className="flex justify-center md:justify-start"
              >
                {feature.fragment}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h2>

          <p className="text-sm md:text-base text-text-secondary">
            Create rules, manage mocks, and test headers directly in the browser. Click a screenshot to enlarge it.
          </p>
        </div>

        {/* The strip bleeds into the page padding, so the next screenshot peeks in from the edge */}
        <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pt-2 pb-4 [scrollbar-color:rgba(255,255,255,0.15)_transparent] [scrollbar-width:thin] md:-mx-8 md:scroll-px-8 md:px-8">
          {galleryImages.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Open image in modal: ${image.title}`}
              className="group flex w-[85%] shrink-0 snap-start cursor-pointer flex-col gap-3 rounded-xl text-left sm:w-[45%] lg:w-[38%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f8cf0]"
            >
              <Image
                src={image.src}
                width={1071}
                height={694}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-1"
              />

              <span className="px-1 text-sm font-medium text-text-secondary transition-colors group-hover:text-foreground">
                {image.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="card-surface relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div
          aria-hidden
          className="showcase-glow pointer-events-none absolute inset-0"
        />

        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Enjoying Mockiato?</h2>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed text-pretty">
              A quick review helps other developers find it, and sponsorship keeps it growing.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center lg:shrink-0">
            <Button
              href={`${chromeStoreUrl}/reviews`}
              size="lg"
              target="_blank"
              className="rounded-xl"
            >
              <FiStar size={16} />
              Rate extension
            </Button>

            <Button
              href="https://github.com/sponsors/avivasyuta"
              variant="accent"
              size="lg"
              target="_blank"
              className="group"
            >
              <FiHeart
                size={16}
                className="transition-transform group-hover:scale-110"
              />
              Sponsor on GitHub
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title}
      >
        {selectedImage ? (
          <Image
            src={selectedImage.src}
            width={1071}
            height={694}
            alt={selectedImage.alt}
            className="w-full h-auto"
          />
        ) : null}
      </Modal>
    </div>
  );
}

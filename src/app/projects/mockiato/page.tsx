import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function MockiatoProjectPage() {
  return (
    <div className="mx-auto flex flex-col gap-8 md:gap-16 w-full max-w-7xl px-4 md:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="flex flex-col gap-6 flex-1">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Mockiato</h1>

          <p className="text-text-secondary leading-relaxed">
            An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.
          </p>

          <div className="flex gap-3 mt-2">
            <Link
              href="https://chromewebstore.google.com/detail/mockiato-%E2%80%94-free-api-testi/ilbkkhmnmnehcicempfpekgcpneeekao"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors"
              target="_blank"
            >
              <ExternalLink size={14} />
              Try it!
            </Link>

            <Link
              href="https://github.com/avivasyuta/mockiato"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary text-sm font-medium hover:border-border-hover hover:text-foreground transition-all"
              target="_blank"
            >
              <Github size={14} />
              Source code
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <Image src="/logo/mockiato.png" width={300} height={300} alt="Mockiato extension logo" className="rounded-2xl" />
        </div>
      </div>

      <div className="card-surface p-6 md:p-8">
        <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
          <p>
            Chrome extension to intercept requests, create real-time mocks, and auto-insert headers for web development & testing API.
          </p>
          <p>
            Mockiato is an extension for Google Chrome, designed to optimize web application development and testing. It allows you to intercept outgoing requests in real-time and create mocks for them, ensuring quick emulation of server responses.
          </p>
          <p>
            In addition, Mockiato enables the addition or modification of headers in requests. This feature significantly simplifies request configuration and saves developers&apos; time. Combined, these tools provide flexibility and convenience, making the development and testing process more efficient and reliable.
          </p>
        </div>
      </div>
    </div>
  );
}

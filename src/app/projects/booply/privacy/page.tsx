import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Booply Privacy Policy',
  description: 'How Booply handles your data.',
};

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
      </div>

      <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover">
        <p>The privacy policy for Booply will be published here before the app is released.</p>
      </div>
    </div>
  );
}

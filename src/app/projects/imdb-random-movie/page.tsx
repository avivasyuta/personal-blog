import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ImdbRandomMoviePage() {
  return (
    <div className="mx-auto flex flex-col gap-8 w-full max-w-7xl px-4 md:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">IMDB Random Movie</h1>

      <p className="text-text-secondary leading-relaxed">Coming soon...</p>
    </div>
  );
}

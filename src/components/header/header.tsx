'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { DesktopNavigation } from '@/src/components/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`relative md:sticky md:top-0 md:z-30 flex h-17 items-center justify-center backdrop-blur-xl transition-all duration-300 border-b ${
        isScrolled
          ? 'border-border bg-background/80 shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="flex justify-center md:justify-between items-center w-full max-w-7xl px-4 md:px-8">
        <Link href="/" className="font-mono font-bold text-2xl text-primary hover:text-primary-hover transition-colors">
          {'<AI/>'}
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          <DesktopNavigation />

          <div className="h-6 w-px bg-border"></div>

          <Link
            href="/Ivasiuta Aleksei CV. Senior Software Engineer.pdf"
            download
            className="btn btn-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Download size={14} />
            Download CV
          </Link>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { DesktopNavigation } from '@/src/components/layout/navigation';

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
      className={`relative z-30 md:sticky md:top-0 flex h-17 items-center justify-center transition-all duration-300 border-b ${
        isScrolled
          ? // Only the desktop header sticks: on a phone it scrolls away with the page, so it keeps no background
            'border-transparent md:backdrop-blur-xl md:border-border md:bg-background/80 md:shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="flex justify-center md:justify-between items-center w-full max-w-7xl px-4 md:px-8">
        <Link
          href="/"
          className="font-mono font-bold text-2xl text-primary hover:text-primary-hover transition-colors"
        >
          {'<AI/>'}
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          <DesktopNavigation />

          <div className="h-6 w-px bg-border"></div>

          <Link
            href="/Ivasiuta Aleksei CV. Senior Software Engineer.pdf"
            download
            className="nav-link inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            <FiDownload size={14} />
            CV
          </Link>
        </div>
      </div>
    </header>
  );
}

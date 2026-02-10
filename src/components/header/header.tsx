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

  const scrolledClasses = isScrolled ? 'border-gray-800' : 'border-transparent';

  return (
    <header
      className={`relative md:sticky md:top-0 md:z-30 flex h-[68] items-center justify-center bg-gray/50 backdrop-blur-lg transition-colors border-b ${scrolledClasses}`}
    >
      <div className="flex justify-center md:justify-between items-center w-full max-w-7xl px-4 md:px-8">
        <Link href="/" className="font-mono font-bold text-2xl text-primary">
          {'<AI/>'}
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          <DesktopNavigation />

          <div className="h-6 w-0.5 bg-gray-800"></div>

          <button className="btn btn-sm bg-primary">
            <Download size={14} />
            Download my CV
          </button>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from './menu';
import { Sun } from 'lucide-react';

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
      className={`sticky top-0 z-30 flex h-[68] items-center justify-center bg-gray/50 backdrop-blur-lg transition-colors border-b ${isScrolled ? 'border-neutral-100 dark:border-gray-900' : 'border-transparent'}`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl px-4 md:px-8">
        <Link href="/" className="font-mono font-bold text-2xl">
          {'<AI/>'}
        </Link>

        <div className="flex items-center gap-6">
          <Menu />

          <div className="h-6 w-0.5 bg-neutral-100 dark:bg-gray-900"></div>

          <button className="btn btn-sm btn-ghost btn-square">
            <Sun size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}

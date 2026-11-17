'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/lib/utils';
import { menuItems } from './menu-items';

const glass = 'border border-white/10 bg-[#141417]/55 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl';

// A floating capsule in the style of the page's segmented tabs: the current section is the white pill
export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4 md:hidden"
    >
      <ul className={cn('flex gap-1 rounded-full p-1', glass)}>
        {menuItems.map((item) => {
          const isActive = item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);

          return (
            <li key={item.link}>
              <Link
                href={item.link}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex h-11 items-center rounded-full px-5 text-sm font-semibold transition-colors',
                  isActive ? 'bg-white text-black' : 'text-white/65 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

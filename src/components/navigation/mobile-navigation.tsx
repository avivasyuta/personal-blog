'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from './menu-items';

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 inset-x-4 z-50 md:hidden">
      <div className="mx-auto max-w-sm px-2 py-2 rounded-2xl bg-surface/40 backdrop-blur-xl border border-border shadow-lg">
        <ul className="flex justify-center gap-2">
          {menuItems.map((item) => {
            const isActive =
              item.link === '/'
                ? pathname === '/'
                : pathname.startsWith(item.link);

            return (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-foreground'
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute -bottom-1 h-0.5 w-4 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

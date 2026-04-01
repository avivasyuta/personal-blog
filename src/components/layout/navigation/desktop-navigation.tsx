'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from './menu-items';

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6">
      {menuItems.map((item) => {
        const isActive = item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);

        return (
          <li key={item.link}>
            <Link
              href={item.link}
              className={`nav-link text-sm font-medium transition-colors ${
                isActive ? 'text-foreground active' : 'text-text-secondary hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

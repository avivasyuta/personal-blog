import Link from 'next/link';
import { menuItems } from './menu-items';

export function DesktopNavigation() {
  return (
    <ul className="flex gap-6">
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link
            href={item.link}
            className="nav-link text-sm font-medium transition-colors text-text-secondary hover:text-foreground"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

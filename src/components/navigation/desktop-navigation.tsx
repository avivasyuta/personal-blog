import Link from 'next/link';
import { menuItems } from './menu-items';

export function DesktopNavigation() {
  return (
    <ul className="flex gap-6">
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link
            href={item.link}
            className="text-base font-medium transition-all text-gray-300 hover:text-white active:text-white"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

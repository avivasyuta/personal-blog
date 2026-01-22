import Link from 'next/link';
import { menuItems } from './menu-items';

export function DesktopNavigation() {
  return (
    <ul className="flex gap-6">
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link
            href={item.link}
            className="text-base font-medium text-gray-600 dark:text-gray-300 transition-all hover:text-gray-900 dark:hover:text-white active:text-gray-600 dark:active:text-white"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

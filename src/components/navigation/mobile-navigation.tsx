import Link from 'next/link';
import { menuItems } from './menu-items';

export function MobileNavigation() {
  return (
    <div className="fixed bottom-4 inset-x-4 p-4 md:hidden rounded-2xl flex justify-center bg-surface/80 backdrop-blur-xl border border-border">
      <ul className="flex gap-6">
        {menuItems.map((item) => (
          <li key={item.link}>
            <Link
              href={item.link}
              className="text-sm font-medium transition-colors text-text-secondary hover:text-foreground"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

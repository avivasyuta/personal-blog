import Link from 'next/link';
import { GlassPanel } from '@/src/components/glass-panel';
import { menuItems } from './menu-items';

export function MobileNavigation() {
  return (
    <GlassPanel className="fixed bottom-4 inset-x-4 p-5 md:hidden rounded-2xl flex justify-center">
      <ul className="flex gap-4">
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
    </GlassPanel>
  )

  return (
    <div className="fixed bottom-4 inset-x-4 p-5 md:hidden rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5">
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
    </div>
  );
}

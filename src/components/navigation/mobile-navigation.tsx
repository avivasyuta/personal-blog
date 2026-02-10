import Link from 'next/link';
import { GlassPanel } from '@/src/components/glass-panel';
import { menuItems } from './menu-items';

export function MobileNavigation() {
  return (
    <GlassPanel className="fixed bottom-4 inset-x-4 p-5 md:hidden rounded-full flex justify-center">
      <ul className="flex gap-4">
        {menuItems.map((item) => (
          <li key={item.link}>
            <Link
              href={item.link}
              className="text-base font-medium transition-all text-gray-300  hover:text-white active:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </GlassPanel>
  )
}

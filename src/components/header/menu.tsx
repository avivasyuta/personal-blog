import Link from 'next/link';

type MenuItem = {
  name: string;
  link: string;
};

const items: MenuItem[] = [
  {
    name: 'About me',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
];

export function Menu() {
  return (
    <ul className="flex gap-6">
      {items.map((item) => (
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

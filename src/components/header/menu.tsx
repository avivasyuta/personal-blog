import Link from 'next/link';

type MenuItem = {
    name: string;
    link: string;
}

const items: MenuItem[] = [
    {
        name: 'About me',
        link: '/'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
];

export function Menu () {
    return (
        <ul>
            {items.map(item => (
                <li key={item.link}>
                    <Link href={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
};
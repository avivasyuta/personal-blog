import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';

const links = [
  {
    href: 'https://www.linkedin.com/in/avivasyuta',
    label: "Aleksei's LinkedIn profile",
    icon: <FiLinkedin size={18} />,
  },
  { href: 'https://github.com/avivasyuta', label: "Aleksei's GitHub profile", icon: <FiGithub size={18} /> },
  {
    href: 'https://www.instagram.com/avivasyuta/',
    label: "Aleksei's Instagram profile",
    icon: <FiInstagram size={18} />,
  },
];

type SocialLinksProps = {
  className?: string;
};

// Round glassy buttons that sit on the colored banners of the home page
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
          className="flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-black"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

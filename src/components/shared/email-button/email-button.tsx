import { FiMail } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';

type EmailButtonProps = {
  email: string;
  subject?: string;
  className?: string;
};

// The solid white email button every contact block ends with, the same as on the home page
export function EmailButton({ email, subject, className }: EmailButtonProps) {
  const href = subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;

  return (
    <a
      href={href}
      className={cn(
        'inline-flex h-12 shrink-0 items-center gap-2 rounded-full white-pill px-6 text-sm font-semibold text-black md:text-base',
        className
      )}
    >
      <FiMail size={18} />
      {email}
    </a>
  );
}

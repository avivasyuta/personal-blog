import type { CSSProperties } from 'react';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';

type PhoneScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
};

// An iPhone screenshot framed as a device; the screenshot already includes the status bar and Dynamic Island
export function PhoneScreenshot({ src, alt, className, priority, style }: PhoneScreenshotProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[2.75rem] border-[6px] border-[#2b2b2e] bg-black shadow-[0_32px_64px_-24px_rgba(0,0,0,0.9)]',
        className
      )}
      style={style}
    >
      <Image
        src={src}
        width={603}
        height={1311}
        alt={alt}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

import fs from 'fs';
import Image from 'next/image';
import path from 'path';
import { scopeSvgIds } from '@/src/lib/scope-svg-ids';

type MDXImageProps = React.ComponentProps<typeof Image>;

export function MDXImage({ src, alt, ...props }: MDXImageProps) {
  if (typeof src === 'string' && src.endsWith('.svg')) {
    const filePath = path.join(process.cwd(), 'public', src);
    const svgId = path.basename(src, '.svg');

    let svgContent: string | null = null;
    try {
      svgContent = scopeSvgIds(fs.readFileSync(filePath, 'utf-8'), svgId);
    } catch {
      // Fall through to regular img if file can't be read
    }

    if (svgContent !== null) {
      return (
        <span
          role="img"
          aria-label={alt}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      );
    }
  }

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      {...props}
    />
  );
}

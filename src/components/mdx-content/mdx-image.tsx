import fs from 'fs';
import path from 'path';
import { scopeSvgIds } from '@/src/lib/scope-svg-ids';

type MDXImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function MDXImage({ src, alt, ...props }: MDXImageProps) {
  if (typeof src === 'string' && src.endsWith('.svg')) {
    const filePath = path.join(process.cwd(), 'public', src);
    const svgId = path.basename(src, '.svg');

    try {
      const svgContent = scopeSvgIds(fs.readFileSync(filePath, 'utf-8'), svgId);
      
      return (
        <figure
          role="img"
          aria-label={alt}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      );
    } catch {
      // Fall through to regular img if file can't be read
    }
  }

  return <img src={src} alt={alt} {...props} />;
}

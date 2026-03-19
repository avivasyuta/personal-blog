import fs from 'fs';
import path from 'path';

type MDXImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function MDXImage({ src, alt, ...props }: MDXImageProps) {
  if (typeof src === 'string' && src.endsWith('.svg')) {
    const filePath = path.join(process.cwd(), 'public', src);

    try {
      const svgContent = fs.readFileSync(filePath, 'utf-8');
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

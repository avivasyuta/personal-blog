import { Children, isValidElement, type ReactNode } from 'react';

export type Heading = {
  id: string;
  text: string;
};

// The anchor for a heading: lowercase words joined by dashes, the same for the heading and the table of contents
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[`*_~]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

// The plain text of rendered heading children, which may hold inline code or emphasis
export function textOf(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') return String(child);
      if (isValidElement<{ children?: ReactNode }>(child)) return textOf(child.props.children);
      return '';
    })
    .join('');
}

// The second-level headings of a Markdown source, skipping fenced code where `##` can be a comment
export function headingsOf(source: string): Heading[] {
  const headings: Heading[] = [];
  let isInCode = false;

  for (const line of source.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      isInCode = !isInCode;
      continue;
    }
    const match = !isInCode && /^##\s+(.+?)\s*#*\s*$/.exec(line);
    if (match) {
      const text = match[1].replace(/[`*_~]/g, '');
      headings.push({ id: slugify(text), text });
    }
  }

  return headings;
}

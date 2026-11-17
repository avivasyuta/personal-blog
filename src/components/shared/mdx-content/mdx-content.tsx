import type { ReactNode } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { Tabs, Tab } from '@/src/components/ui/tabs';
import { CodeBlock } from '@/src/components/shared/code-block';
import { MDXImage } from './mdx-image';
import { slugify, textOf } from '@/src/lib/headings';

const components = {
  Tabs,
  Tab,
  pre: CodeBlock,
  img: MDXImage,
  // An anchor on every section, so the post's table of contents can link to it
  h2: ({ children }: { children?: ReactNode }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
};

type MDXContentProps = {
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: 'vitesse-dark',
                  keepBackground: false,
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}

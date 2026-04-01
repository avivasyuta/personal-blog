import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { Tabs, Tab } from '@/src/components/ui/tabs';
import { CodeBlock } from '@/src/components/shared/code-block';
import { MDXImage } from './mdx-image';

const components = {
  Tabs,
  Tab,
  pre: CodeBlock,
  img: MDXImage,
};

type MDXContentProps = {
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
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

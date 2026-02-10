import { MDXRemote } from 'next-mdx-remote/rsc';
import { Tabs, Tab } from '@/src/components/tabs';

const components = {
  Tabs,
  Tab,
};

type MDXContentProps = {
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

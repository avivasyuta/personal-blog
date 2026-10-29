import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mockiato',
  description:
    'Mockiato is a free, open source Chrome extension for mocking API responses. Set custom body, status code, headers and delay without a backend or proxy.',
};

export default function MockiatoLayout({ children }: PropsWithChildren) {
  return children;
}

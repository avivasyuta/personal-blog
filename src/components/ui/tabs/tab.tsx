'use client';

import { ReactNode } from 'react';
import { useTabsContext } from './tabs-context';

type TabProps = {
  label: string;
  children: ReactNode;
};

export function Tab({ label, children }: TabProps) {
  const { activeTab } = useTabsContext();

  if (activeTab !== label) {
    return null;
  }

  return <div className="prose prose-invert max-w-none">{children}</div>;
}

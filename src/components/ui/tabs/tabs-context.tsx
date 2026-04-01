'use client';

import { createContext, useContext } from 'react';

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab must be used within Tabs component');
  }
  return context;
}

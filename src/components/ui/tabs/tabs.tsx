'use client';

import { useState, Children, isValidElement, ReactNode, ReactElement, type KeyboardEvent } from 'react';
import { TabsContext } from './tabs-context';
import { cn } from '@/src/lib/utils';

type TabProps = {
  label: string;
  children: ReactNode;
};

type TabsProps = {
  children: ReactNode;
  defaultTab?: string;
  className?: string;
};

export function Tabs({ children, defaultTab, className }: TabsProps) {
  const tabs: { label: string; key: string }[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const tabChild = child as ReactElement<TabProps>;
      if (tabChild.props.label) {
        tabs.push({
          label: tabChild.props.label,
          key: tabChild.props.label,
        });
      }
    }
  });

  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.label || '');

  // Arrow keys move between tabs, as in any tab list
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.label === activeTab);
    const next = tabs[(index + step + tabs.length) % tabs.length];
    setActiveTab(next.label);
    event.currentTarget.querySelector<HTMLButtonElement>(`[data-tab="${CSS.escape(next.label)}"]`)?.focus();
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('not-prose my-8', className)}>
        <div
          role="tablist"
          onKeyDown={handleKeyDown}
          className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 [scrollbar-width:none]"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                data-tab={tab.label}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.label)}
                className={cn(
                  'shrink-0 cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                  isActive ? 'bg-white text-black' : 'text-white/60 hover:bg-white/10 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="accent-surface mt-3 rounded-3xl p-5 md:p-6"
        >
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

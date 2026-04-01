'use client';

import { useState, Children, isValidElement, ReactNode, ReactElement } from 'react';
import { TabsContext } from './tabs-context';

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

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`my-6 ${className || ''}`}>
        <div
          role="tablist"
          className="flex gap-2"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.key}
                role="tab"
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-[0_0_20px_var(--color-primary-glow)]'
                    : 'border border-border bg-surface text-text-secondary hover:border-border-hover hover:text-foreground'
                }`}
                onClick={() => setActiveTab(tab.label)}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="card-surface mt-4 p-4">{children}</div>
      </div>
    </TabsContext.Provider>
  );
}

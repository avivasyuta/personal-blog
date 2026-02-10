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
        <div role="tablist" className="tabs tabs-bordered tabs-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              className={`tab ${activeTab === tab.label ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-white/10 bg-base-200 p-4">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

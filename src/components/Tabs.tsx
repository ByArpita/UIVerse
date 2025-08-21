import React, { useState } from 'react';

interface TabProps {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  defaultActiveTab?: number;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <div className="w-full">
      <div className="border-b border-gray-400 dark:border-gray-600">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none ${activeTab === index
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {tabs[activeTab] ? tabs[activeTab].content : null}
      </div>
    </div>
  );
};

export default Tabs;

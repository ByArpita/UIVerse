import React, { useState, useRef, useEffect } from 'react';

// Define the props for a single Accordion item
interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

// Icon component for open/close indicator
const AccordionIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Single Accordion Item Component
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div className="border-b border dark:border-gray-700">
      <h2>
        <button
          type="button"
          onClick={onClick}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
          className="flex items-center justify-between w-full p-5 font-medium text-left text-textSecondary dark:text-gray-400 hover:bg-muted dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-ring dark:focus:ring-gray-800"
        >
          <span>{title}</span>
          <AccordionIcon isOpen={isOpen} />
        </button>
      </h2>
      <div
        ref={contentRef}
        id={`accordion-content-${title.replace(/\s+/g, '-')}`}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="p-5 text-textSecondary dark:text-gray-400">
          {content}
        </div>
      </div>
    </div>
  );
};

// Define the props for the main Accordion component
interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }[];
  allowMultipleOpen?: boolean;
  openIndexes?: number[];
  onToggle?: (indexes: number[]) => void;
}

// Main Accordion Component
const Accordion: React.FC<AccordionProps> = ({ items, allowMultipleOpen = false, openIndexes, onToggle }) => {
  const [internalOpenIndexes, setInternalOpenIndexes] = useState<number[]>(
    items
      .map((item, index) => (item.defaultOpen ? index : -1))
      .filter((index) => index !== -1)
  );

  const isControlled = openIndexes !== undefined && onToggle !== undefined;
  const currentOpenIndexes = isControlled ? openIndexes : internalOpenIndexes;

  const handleToggle = (index: number) => {
    let newOpenIndexes: number[];
    if (allowMultipleOpen) {
      newOpenIndexes = currentOpenIndexes.includes(index)
        ? currentOpenIndexes.filter((i) => i !== index)
        : [...currentOpenIndexes, index];
    } else {
      newOpenIndexes = currentOpenIndexes.includes(index) ? [] : [index];
    }

    if (isControlled) {
      onToggle(newOpenIndexes);
    } else {
      setInternalOpenIndexes(newOpenIndexes);
    }
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={currentOpenIndexes.includes(index)}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
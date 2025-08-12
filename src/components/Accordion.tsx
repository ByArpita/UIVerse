import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const onToggle = controlledOnToggle !== undefined ? controlledOnToggle : () => setInternalIsOpen(!internalIsOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-5 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && <div className="px-5 pb-4 text-gray-600">{children}</div>}
    </div>
  );
};

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
  defaultOpenIndex?: number;
  onItemToggle?: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  defaultOpenIndex,
  onItemToggle,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    onItemToggle?.(index);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItem };

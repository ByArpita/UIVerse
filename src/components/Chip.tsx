import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning';
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelectChange?: (selected: boolean) => void;
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  children,
  type = 'default',
  isSelectable = false,
  isSelected = false,
  onSelectChange,
  onClose,
}) => {
  let bgColorClass = 'bg-muted';
  let textColorClass = 'text-muted-foreground';
  let hoverClass = '';

  switch (type) {
    case 'primary':
      bgColorClass = 'bg-primary';
      textColorClass = 'text-primary-foreground';
      break;
    case 'success':
      bgColorClass = 'bg-accent';
      textColorClass = 'text-accent-foreground';
      break;
    case 'error':
      bgColorClass = 'bg-destructive';
      textColorClass = 'text-destructive-foreground';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-100';
      textColorClass = 'text-yellow-800';
      break;
    case 'default':
    default:
      // Default is already set
      break;
  }

  if (isSelectable) {
    hoverClass = 'cursor-pointer hover:opacity-80';
    if (isSelected) {
      bgColorClass = 'bg-primary-dark';
      textColorClass = 'text-primary-foreground';
    }
  }

  const handleClick = () => {
    if (isSelectable && onSelectChange) {
      onSelectChange(!isSelected);
    }
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bgColorClass} ${textColorClass} ${hoverClass}`}
      onClick={handleClick}
    >
      {children}
      {onClose && (
        <button
          type="button"
          className="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-current hover:bg-opacity-75 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation(); // Prevent chip selection when closing
            onClose();
          }}
        >
          <span className="sr-only">Remove tag</span>
          <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Chip;

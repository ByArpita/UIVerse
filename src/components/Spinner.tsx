import React from 'react';

interface SpinnerProps {
  type?: 'dots' | 'ring' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  type = 'ring',
  size = 'md',
  color = 'text-blue-500', // default Tailwind blue
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const spinnerSizeClass = sizeClasses[size];
  const bgColorClass = color.replace('text-', 'bg-');

  switch (type) {
    case 'dots':
      return (
        <div className="flex space-x-1">
          <div className={`rounded-full animate-bounce ${spinnerSizeClass} ${bgColorClass}`} style={{ animationDelay: '-0.3s' }}></div>
          <div className={`rounded-full animate-bounce ${spinnerSizeClass} ${bgColorClass}`} style={{ animationDelay: '-0.15s' }}></div>
          <div className={`rounded-full animate-bounce ${spinnerSizeClass} ${bgColorClass}`}></div>
        </div>
      );
    case 'pulse':
      return (
        <div className={`rounded-full animate-ping ${spinnerSizeClass} ${bgColorClass}`}></div>
      );
    case 'ring':
    default:
      return (
        <div
          className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${spinnerSizeClass} ${color}`}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
  }
};
export default Spinner;
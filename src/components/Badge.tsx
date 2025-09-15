import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  type = 'default',
  className,
}) => {
  let bgColorClass = 'bg-gray-100';
  let textColorClass = 'text-gray-800';

  switch (type) {
    case 'primary':
      bgColorClass = 'bg-blue-100';
      textColorClass = 'text-blue-800';
      break;
    case 'success':
      bgColorClass = 'bg-green-500';
      textColorClass = 'text-white';
      break;
    case 'error':
      bgColorClass = 'bg-red-500';
      textColorClass = 'text-white';
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

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColorClass} ${textColorClass} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

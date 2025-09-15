import React, { useState } from 'react';

interface AlertProps {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',
  showCloseButton = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  let bgColorClass = 'bg-blue-100';
  let textColorClass = 'text-blue-800';
  let borderColorClass = 'border-blue-400';

  switch (type) {
    case 'success':
      bgColorClass = 'bg-green-500';
      textColorClass = 'text-white';
      borderColorClass = 'border-green-500';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-100';
      textColorClass = 'text-yellow-800';
      borderColorClass = 'border-yellow-400';
      break;
    case 'error':
      bgColorClass = 'bg-red-500';
      textColorClass = 'text-white';
      borderColorClass = 'border-red-500';
      break;
    case 'info':
    default:
      // Default is already set
      break;
  }

  return (
    <div
      className={`p-4 rounded-md border ${bgColorClass} ${textColorClass} ${borderColorClass} flex justify-between items-center`}
      role="alert"
    >
      <p>{message}</p>
      {showCloseButton && (
        <button
          onClick={handleClose}
          className={`ml-4 ${textColorClass} opacity-75 hover:opacity-100 focus:outline-none`}
          aria-label="Close alert"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;

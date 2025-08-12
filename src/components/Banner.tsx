import React, { useState } from 'react';

interface BannerProps {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  message,
  type = 'info',
  showCloseButton = true,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  let bgColorClass = 'bg-blue-500';
  let textColorClass = 'text-white';

  switch (type) {
    case 'success':
      bgColorClass = 'bg-green-500';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-500';
      textColorClass = 'text-gray-800';
      break;
    case 'error':
      bgColorClass = 'bg-red-500';
      break;
    case 'info':
    default:
      bgColorClass = 'bg-blue-500';
      break;
  }

  return (
    <div className={`${bgColorClass} ${textColorClass} p-4 flex items-center justify-between rounded-md shadow-md`}>
      <p className="flex-grow">{message}</p>
      {showCloseButton && (
        <button
          onClick={handleClose}
          className={`${textColorClass} ml-4 opacity-75 hover:opacity-100 focus:outline-none`}
          aria-label="Close banner"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Banner;

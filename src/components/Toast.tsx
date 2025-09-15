import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number; // in milliseconds, 0 for no auto-dismiss
  onDismiss?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  if (!isVisible) return null;

  let bgColorClass = 'bg-primary';
  let textColorClass = 'text-primary-foreground';

  switch (type) {
    case 'success':
      bgColorClass = 'bg-accent';
      break;
    case 'error':
      bgColorClass = 'bg-destructive';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-500';
      textColorClass = 'text-gray-800';
      break;
    case 'info':
    default:
      bgColorClass = 'bg-primary';
      break;
  }

  return (
    <div
      className={`p-4 rounded-md shadow-lg flex items-center justify-between ${bgColorClass} ${textColorClass}`}
      role="alert"
    >
      <p>{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          onDismiss?.();
        }}
        className="ml-4 opacity-75 hover:opacity-100 focus:outline-none"
        aria-label="Dismiss toast"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
import React from 'react';

interface ProgressBarProps {
  value?: number;
  max?: number;
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  height?: string; // e.g., 'h-1', 'h-2', 'h-4'
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  variant = 'determinate',
  color = 'primary',
  height = 'h-2.5',
  showLabel = false,
}) => {
  const colorClasses = {
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
};


  const bgColorClass = colorClasses[color];
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="w-full">
      <div
        className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}
        role="progressbar"
        aria-valuenow={variant === 'determinate' ? value : undefined}
        aria-valuemin={variant === 'determinate' ? 0 : undefined}
        aria-valuemax={variant === 'determinate' ? max : undefined}
      >
        <div
          className={`rounded-full ${height} ${
            variant === 'indeterminate'
              ? `${bgColorClass} animate-indeterminate w-full`
              : `${bgColorClass} transition-all duration-500 ease-in-out`
          }`}
          style={{ width: variant === 'determinate' ? `${percentage}%` : '100%' }}
        ></div>
      </div>
      {showLabel && variant === 'determinate' && (
        <div className="text-sm text-foreground mt-1 text-center">
          {percentage}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;

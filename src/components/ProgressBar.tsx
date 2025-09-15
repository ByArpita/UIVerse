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
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-accent',
    warning: 'bg-yellow-500',
    danger: 'bg-destructive',
  };

  const bgColorClass = colorClasses[color];
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="w-full">
      <div
        className={`w-full bg-muted rounded-full ${height} overflow-hidden`}
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

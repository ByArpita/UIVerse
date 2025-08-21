import React from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = 'w-full',
  height = 'h-4',
  count = 1,
  className,
}) => {
  const baseClasses = `bg-gray-200 rounded-md animate-pulse ${width} ${height} ${className}`;

  if (count > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={baseClasses}></div>
        ))}
      </div>
    );
  }

  return <div className={baseClasses}></div>;
};

export default SkeletonLoader;

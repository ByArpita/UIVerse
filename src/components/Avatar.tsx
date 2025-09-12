import React, { useState } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  className,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
  };

  const avatarSizeClass = sizeClasses[size];

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-gray-300 text-white font-semibold overflow-hidden ${avatarSizeClass} ${className}`}
    >
      {src && !imageError ? (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          alt={alt}
          onError={handleImageError}
        />
      ) : initials ? (
        <span>{initials.substring(0, 2).toUpperCase()}</span>
      ) : (
        <svg
          className="w-2/3 h-2/3 text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM12 12.5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </svg>
      )}
    </div>
  );
};

export default Avatar;
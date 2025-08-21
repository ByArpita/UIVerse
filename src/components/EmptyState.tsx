import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  illustration?: React.ReactNode;
  actionButton?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  illustration,
  actionButton,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-lg shadow-sm">
      {illustration && <div className="mb-4">{illustration}</div>}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      {actionButton && <div>{actionButton}</div>}
    </div>
  );
};

export default EmptyState;

import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  ...props
}) => {
  const uniqueId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={uniqueId}
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        {...props}
      />
      <label htmlFor={uniqueId} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

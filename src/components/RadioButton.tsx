import React from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  id,
  ...props
}) => {
  const uniqueId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={uniqueId}
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
        {...props}
      />
      <label htmlFor={uniqueId} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

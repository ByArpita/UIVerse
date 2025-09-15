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
        className="focus:ring-primary h-4 w-4 text-primary border-border rounded"
        {...props}
      />
      <label htmlFor={uniqueId} className="ml-2 block text-sm text-foreground">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

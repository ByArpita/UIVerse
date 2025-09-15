import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      className="px-4 py-2 border border-border dark:border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
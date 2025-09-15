import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "fullwidth";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", disabled, ...props }, ref) => {
    const baseClasses =
      "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

    let variantClasses = "";

    switch (variant) {
      case "primary":
        variantClasses = "bg-blue-500 text-white border-transparent hover:bg-blue-600 focus:ring-blue-500";
        break;
      case "secondary":
        variantClasses = "bg-gray-500 text-white border-transparent hover:bg-gray-600 focus:ring-gray-500";
        break;
      case "outline":
        variantClasses = "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-100 focus:ring-blue-500";
        break;
      case "ghost":
        variantClasses = "bg-transparent text-blue-500 border-transparent hover:bg-blue-100 focus:ring-blue-500";
        break;
      case "danger":
        variantClasses = "bg-red-500 text-white border-transparent hover:bg-red-600 focus:ring-red-500";
        break;
      case "success":
        variantClasses = "bg-green-500 text-white border-transparent hover:bg-green-600 focus:ring-green-500";
        break;
      case "fullwidth":
        variantClasses = "w-full bg-blue-500 text-white border-transparent hover:bg-blue-600 focus:ring-blue-500";
        break;
    }

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

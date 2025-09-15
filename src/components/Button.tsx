import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", ...props }, ref) => {
    const baseClasses =
      "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

    let variantClasses = "";

    switch (variant) {
      case "primary":
        variantClasses =
          "bg-primary text-primary-foreground border border-primary hover:bg-primary-dark focus:ring-primary";
        break;
      case "secondary":
        variantClasses =
          "bg-secondary text-secondary-foreground border border-secondary hover:bg-secondary/80 focus:ring-secondary";
        break;
      case "outline":
        variantClasses =
          "bg-transparent text-primary border border-primary hover:bg-primary-light focus:ring-primary";
        break;
      case "ghost":
        variantClasses =
          "bg-transparent text-primary border border-transparent hover:bg-primary-light focus:ring-primary";
        break;
    }

    return (
      <button ref={ref} className={`${baseClasses} ${variantClasses}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

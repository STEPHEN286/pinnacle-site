import React from "react";

const Button = ({ 
  children,
  className = "",
  variant = "default",
  size = "default",
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-button";
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10",
    ghost: "text-primary hover:bg-primary/5 active:bg-primary/10",
    secondary: "bg-secondary text-gray-900 hover:bg-secondary-hover active:bg-secondary-active",
    success: "bg-success text-white hover:bg-success-hover active:bg-success-active",
    danger: "bg-danger text-white hover:bg-danger-hover active:bg-danger-active",
    link: "text-primary underline-offset-4 hover:underline"
  };

  const sizes = {
    sm: "h-[var(--size-button-sm)] px-3 text-sm",
    default: "h-[var(--size-button-md)] px-4 text-base",
    lg: "h-[var(--size-button-lg)] px-6 text-lg",
    icon: "h-[var(--size-button-md)] w-[var(--size-button-md)]"
  };

  const loadingSpinner = (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    "transform active:scale-95",
    className
  ].join(" ");

  return (
    <button
      className={classes}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && loadingSpinner}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button }; 
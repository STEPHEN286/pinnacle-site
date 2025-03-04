import React from "react";

const Input = React.forwardRef(({ 
  className = "",
  type = "text",
  ...props 
}, ref) => {
  const baseStyles = "w-full px-4 py-2 text-gray-900 placeholder:text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200";

  const classes = [baseStyles, className].join(" ");

  return (
    <input
      type={type}
      className={classes}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input }; 
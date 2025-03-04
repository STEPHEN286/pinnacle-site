import React from "react";

const Card = ({ 
  className = "",
  children,
  ...props 
}) => {
  const baseStyles = "bg-white rounded-xl shadow-sm border border-gray-200";

  const classes = [baseStyles, className].join(" ");

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card }; 
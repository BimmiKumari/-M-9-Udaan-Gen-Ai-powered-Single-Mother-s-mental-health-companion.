import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    default: " text-dblue bg-[#00FFFF]   focus:ring-blue-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
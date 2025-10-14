import React from 'react';
interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = ''
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 font-semibold rounded-lg transition-all shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  const widthStyle = fullWidth ? 'w-full' : '';
  return <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}>
      {icon && <span className="text-lg">{icon}</span>}
      {text}
    </button>;
};
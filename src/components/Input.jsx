import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({ 
  label, 
  type = 'text', 
  error, 
  className = '', 
  showPasswordToggle = false,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPasswordToggle && showPassword ? 'text' : type;
  
  const baseClasses = 'w-full px-3 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0';
  const stateClasses = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
    : isFocused 
    ? 'border-primary-500 focus:border-primary-500 focus:ring-primary-500' 
    : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600';
  const themeClasses = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400';
  
  const classes = `${baseClasses} ${stateClasses} ${themeClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={classes}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {type === 'password' && showPasswordToggle && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input; 
import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-5 py-3 text-lg",
};

const variantClasses = {
  filled:
    "bg-gray-100 border border-gray-300 focus:bg-white focus:border-blue-500",
  outlined:
    "border border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
  ghost: "border-none bg-transparent focus:ring-1 focus:ring-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}) => {
  const [internalValue, setInternalValue] = useState(value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col space-y-1 w-full transition-all">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        type="text"
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`rounded-lg shadow-sm transition-all duration-200 placeholder-gray-400 ${sizeClasses[size]} ${variantClasses[variant]} ${
          invalid ? "border-red-500 focus:ring-red-500" : ""
        } ${
          disabled
            ? "bg-gray-200 cursor-not-allowed opacity-60"
            : "hover:shadow-md"
        }`}
        aria-invalid={invalid}
        aria-label={label || placeholder}
      />
      {helperText && !invalid && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

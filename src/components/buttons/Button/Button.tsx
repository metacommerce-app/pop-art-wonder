import React from 'react';

export interface ButtonProps {
  children: string | React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick, className }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`w-full rounded-xl ${className}`}>
      {children}
    </button>
  );
};

export default Button;
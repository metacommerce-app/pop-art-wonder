import React from 'react';

interface ButtonProps {
  children: string | React.ReactNode | React.ReactNode[];
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`w-full rounded-xl ${className}`}>
      {children}
    </button>
  );
};

export default Button;
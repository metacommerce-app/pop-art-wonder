import React from 'react';

interface CircleButtonProps {
  children: string | React.ReactNode | React.ReactNode[];
  onClick: () => void;
  className?: string;
}

const CircleButton: React.FC<CircleButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`relative flex items-center justify-center w-10 h-10 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default CircleButton;
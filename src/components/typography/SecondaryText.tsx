import React from 'react';

interface SecondaryTextProps {
  children?: React.ReactNode;
  className?: string;
}

const SecondaryText: React.FC<SecondaryTextProps> = ({ children, className }) => {
  return <p className={`text-[1rem] font-normal text-secondary-text ${className ?? ''}`}>{children}</p>;
};

export default SecondaryText;

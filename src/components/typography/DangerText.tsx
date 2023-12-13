import React from 'react';

interface DangerTextProps {
  children?: React.ReactNode;
  className?: string;
}

const DangerText: React.FC<DangerTextProps> = ({ children, className }) => {
  return <p className={`text-md font-medium text-red-500 ${className ?? ''}`}>{children}</p>;
};

export default DangerText;

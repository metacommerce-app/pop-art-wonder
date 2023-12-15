import React from 'react';

interface H6Props {
  children?: React.ReactNode;
  className?: string;
}

const H6: React.FC<H6Props> = ({ children, className }) => {
  return <h6 className={`text-md font-semibold ${className ?? ''}`}>{children}</h6>;
};

export default H6;

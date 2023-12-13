import React from 'react';

interface H2Props {
  children?: React.ReactNode;
  className?: string;
}

const H4: React.FC<H2Props> = ({ children, className }) => {
  return <h4 className={`text-xl font-bold ${className ?? ''}`}>{children}</h4>;
};

export default H4;

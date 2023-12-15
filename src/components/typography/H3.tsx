import React from 'react';

interface H2Props {
  children?: React.ReactNode;
  className?: string;
}

const H3: React.FC<H2Props> = ({ children, className }) => {
  return <h3 className={`text-2xl font-bold ${className ?? ''}`}>{children}</h3>;
};

export default H3;

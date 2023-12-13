import React from 'react';

interface H1Props {
  children?: React.ReactNode;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, className }) => {
  return <h1 className={`text-4xl font-bold ${className ?? ''}`}>{children}</h1>;
};

export default H1;

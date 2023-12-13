import React from 'react';

interface H2Props {
  children?: React.ReactNode;
  className?: string;
}

const H5: React.FC<H2Props> = ({ children, className }) => {
  return <h5 className={`text-lg font-semibold ${className ?? ''}`}>{children}</h5>;
};

export default H5;

import React from 'react';

interface PageTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ className, children }) => {
  return <h1 className={`text-3xl font-bold ${className ?? ''}`}>{children}</h1>;
};

export default PageTitle;

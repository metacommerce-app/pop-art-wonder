import React from 'react';

interface PageSubTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const PageSubTitle: React.FC<PageSubTitleProps> = ({ children, className }) => {
  return <p className={`text-lg text-slate-500 ${className ?? ''}`}>{children}</p>;
};

export default PageSubTitle;

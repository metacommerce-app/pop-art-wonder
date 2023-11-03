import React from 'react';
import Spinner from './Spinner';

interface PageSpinnerProps {
  className?: string;
}

const PageSpinner: React.FC<PageSpinnerProps> = ({className}) => {
  return (
    <div className={`bg-black h-screen flex flex-col justify-center items-center ${className}`}>
      <Spinner />
    </div>
  );
};

export default PageSpinner;

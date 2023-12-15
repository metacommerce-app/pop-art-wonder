import { clientConfig } from '@/client/types/config';
import React from 'react';

interface TitleProps {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ className }) => {
  return (
    <div className={`font-bold text-4xl text-gray-800 ${className}`}>
      { clientConfig.appName }
    </div>
  );
};

export default Title;
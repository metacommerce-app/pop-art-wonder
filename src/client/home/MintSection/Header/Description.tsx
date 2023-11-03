import { config } from '@/client/types/config';
import React from 'react';

interface DescriptionProps {
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({ className }) => {
  return (
    <div className={`text-lg text-gray-700 ${className}`}>
      {config.description}
    </div>
  );
};

export default Description;
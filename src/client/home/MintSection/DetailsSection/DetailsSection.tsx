import React from 'react';
import DetailsWidget from './Widgets/DetailsWidget/DetailsWidget';

interface DetailsSectionProps {
  className?: string;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-full gap-x-4 ${className}`}>
      <DetailsWidget />
    </div>
  );
};

export default DetailsSection;
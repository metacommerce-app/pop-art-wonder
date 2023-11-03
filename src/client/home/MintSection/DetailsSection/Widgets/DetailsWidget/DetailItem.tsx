import Divider from '@/components/dividers/Divider/Divider';
import React from 'react';

interface DetailItemProps {
  title: string;
  value: string;
  className?: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ title, value, className }) => {
  return (
    <div className={`w-full overflow-hidden ellipsis ${className}`}>
      <div className='text-xs text-gray-700 uppercase'>
        { title }
      </div>
      <div className={`text-gray-900 text-sm font-bold uppercase ${className}`}>
        { value }
      </div>
      <Divider className='opacity-50 mb-0' />
    </div>
  );
};

export default DetailItem;
import React from 'react';

interface WidgetProps {
  title: string;
  value?: string;
}

const Widget: React.FC<WidgetProps> = ({ title, value }) => {
  return (
    <div className='flex flex-col uppercase leading-none'>
      <div className='text-sm text-gray-500'>
        { title }
      </div>
      <div className='text-xl font-bold text-gray-800'>
        { value }
      </div>
    </div>
  );
};

export default Widget;
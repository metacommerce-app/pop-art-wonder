import React from 'react';

interface CountdownWidgetProps {
  title: string;
  timeLeft: number;
}

const CountdownWidget: React.FC<CountdownWidgetProps> = ({ title, timeLeft }) => {

  return (
    <div className='flex flex-col justify-center text-center'>
      <div className='text-xl font-bold'>
        {timeLeft}
      </div>
      <div className='text-xs uppercase'>
        {title}
      </div>
    </div>
  );
};

export default CountdownWidget;
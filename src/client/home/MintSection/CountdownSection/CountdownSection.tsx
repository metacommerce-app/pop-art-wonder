import React from 'react';
import Countdown from './Countdown/Countdown';
import CountdownTitle from './CountdownTitle/CountdownTitle';
import { config } from '@/client/types/config';
import IsVisibleWhen from '@/components/conditionals/IsVisibleWhen';


const CountdownSection: React.FC = () => {
  const now = new Date();
  const isStarted = now.getTime() > new Date(config.startDate).getTime()
  const isFinished = now.getTime() > new Date(config.endDate).getTime()
  const target = isStarted ? new Date(config.endDate) : new Date(config.startDate)

  return (
    <IsVisibleWhen condition={!isFinished}>
      <div className='py-4 flex flex-row w-full'>
        <div className='flex items-center uppercase text-sm'>
          <CountdownTitle />
        </div>
        <div className='flex flex-grow'></div>
        <div className='flex flex-row gap-4 px-2'>
          <Countdown target={target} />
        </div>
      </div>
    </IsVisibleWhen>
  );
};

export default CountdownSection;
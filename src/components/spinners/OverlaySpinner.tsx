import React from 'react';
import Spinner from './Spinner';

const OverlaySpinner: React.FC = () => {

  return (
    <div className='absolute opacity-40 h-screen w-screen flex flex-col justify-center items-center'>
      <Spinner />
    </div>
  );
};

export default OverlaySpinner;

import Button, { ButtonProps } from './Button';

import React from 'react';

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button  {...props} className={`border border-gray-500 py-4 px-2  bg-pink-400 text-white !rounded-md  transition-all  ${props.className}`} >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;

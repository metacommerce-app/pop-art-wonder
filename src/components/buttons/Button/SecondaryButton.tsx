import Button, { ButtonProps } from './Button';

import React from 'react';

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`border border-gray-500 py-4 px-2 bg-gray-800 text-white !rounded-md w-full transition-all  ${props.className}`} >
      {props.children}
    </Button>
  );
};

export default SecondaryButton;

import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({className}) => {
  return <div className={`my-2 flex border-b border-gray-400 w-full ${className}`} />;
};

export default Divider;
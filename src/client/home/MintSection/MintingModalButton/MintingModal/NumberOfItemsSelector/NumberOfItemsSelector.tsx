import React from 'react';
import Plus from './Plus';
import Minus from './Minus';
import DisplayIf from '@/components/conditionals/DisplayIf';

interface NumberOfItemsSelectorProps {
  numberOfItems: number;
  isDisabled: boolean;
  onChange: (value: number) => void;
}

const NumberOfItemsSelector: React.FC<NumberOfItemsSelectorProps> = ({ numberOfItems, onChange, isDisabled}) => {
  const handleAddItem = (n: number) => {
    if (isDisabled) return;
    onChange(numberOfItems + n)
  }

  const handleRemoveItem = (n: number) => {
    if (isDisabled) return;
    onChange(Math.max(numberOfItems - n, 0))
  }

  return (
    <div className='flex flex-row gap-6 items-center w-full justify-center '>
      <Minus onClick={() => handleRemoveItem(1)} />
      <div className='text-3xl font-bold text-gray-800'>
        {numberOfItems}
      </div>
      <Plus onClick={() => handleAddItem(1)} />
    </div>
  );
};

export default NumberOfItemsSelector;

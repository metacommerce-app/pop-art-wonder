import React from 'react';
import { useTranslation } from 'react-i18next';

interface ItemPriceSectionProps {
  numberOfItems: number;
}

const ItemPriceSection: React.FC<ItemPriceSectionProps> = ({numberOfItems}) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className='flex flex-row text-gray-500 leading-none'>
        <div>
          {t("Item")} x {numberOfItems}
        </div>
        <div className='flex flex-grow'></div>
        <div>
          0.00 ETH
        </div>
      </div>
      <div className='flex flex-row text-gray-500 text-xs'>
        <div className='flex flex-grow'></div>
        <div className=''>
          ~ $0.00
        </div>
      </div>
    </div>
  );
};

export default ItemPriceSection;
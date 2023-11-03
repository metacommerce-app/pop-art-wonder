import React from 'react';
import { useTranslation } from 'react-i18next';
import ItemPriceSection from './ItemPriceSection/ItemPriceSection';
import GasPriceSection from './GasPriceSection/GasPriceSection';
import TotalSection from './TotalSection/TotalSection';

interface OrderDetailsProps {
  numberOfItems: number;
  className?: string;
}

/**
 * TODO: get this programmatically 
 */
const OrderDetails: React.FC<OrderDetailsProps> = ({numberOfItems, className}) => {
  const { t } = useTranslation()
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className='my-4 uppercase font-bold text-md text-gray-800'>
        {t("Your Order")}  
      </div>    
      <div className='flex flex-col gap-4'>
        <ItemPriceSection numberOfItems={numberOfItems} />
        <GasPriceSection numberOfItems={numberOfItems} />
        <TotalSection total={0} totalUsd={0} />
      </div>
    </div>
  );
};

export default OrderDetails;
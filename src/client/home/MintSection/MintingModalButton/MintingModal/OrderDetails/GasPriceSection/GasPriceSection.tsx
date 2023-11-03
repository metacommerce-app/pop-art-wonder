import { useNftDetails } from '@/client/home/useNftDetails';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface GasPriceSectionProps {
  numberOfItems: number;
}

/**
 * TODO: get this programmatically
 */
const GasPriceSection: React.FC<GasPriceSectionProps> = ({ numberOfItems }) => {
  const { t } = useTranslation();
  const { gas } = useNftDetails();
  return (
    <div>
      <div className='flex flex-row text-gray-500 leading-none'>
        <div>{t('Estimated Gas Price')}</div>
        <div className='flex flex-grow'></div>
        <div>{`${gas.priceETH ?? '0.0000'} ETH`}</div>
      </div>
      <div className='flex flex-row text-gray-500 text-xs'>
        <div className='flex flex-grow'></div>
        <div className=''>~ ${`${gas.priceUSD ?? '0.00'}`}</div>
      </div>
    </div>
  );
};

export default GasPriceSection;

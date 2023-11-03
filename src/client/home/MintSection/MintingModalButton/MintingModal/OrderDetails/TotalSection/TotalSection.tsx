import { useNftDetails } from '@/client/home/useNftDetails';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface TotalSectionProps {
  total: number;
  totalUsd: number;
}


/**
 * TODO: Get this programmatically / parse total/totalUsd 
 */
const TotalSection: React.FC<TotalSectionProps> = ({total, totalUsd}) => {
  const { t } = useTranslation()
  const { gas } = useNftDetails()

  return (
    <div>
      <div className='flex flex-row text-gray-900 leading-none uppercase text-md font-bold'>
        <div>
          {t("Total")}
        </div>
        <div className='flex flex-grow'></div>
        <div>
          {gas.priceETH ?? "0.0000"} ETH
        </div>
      </div>
      <div className='flex flex-row text-gray-500 text-xs'>
        <div className='flex flex-grow'></div>
        <div className=''>
          ~ ${gas.priceUSD ?? "0.00"}
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
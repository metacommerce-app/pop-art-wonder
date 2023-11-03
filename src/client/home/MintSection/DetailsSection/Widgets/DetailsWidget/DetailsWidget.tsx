import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailItem from './DetailItem';
import { toParsedAddress } from '@/client/home/utils';
import { config } from '@/client/types/config';
import dayjs from 'dayjs';

interface DetailsWidgetProps {
  className?: string;
}

const DetailsWidget: React.FC<DetailsWidgetProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={`my-4 border border-gray-300 p-4 rounded-md ${className}`}>
      <div className='font-bold uppercase text-sm'>
        { t("View Details") }
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div className='flex flex-col gap-4'>
          <DetailItem title={t("Opensea URL")} value={config.openseaUrl} className='!lowercase' />
          <DetailItem title={t('Token Standard')} value={t('ERC721')} />
          <DetailItem title={t('Start Date')} value={dayjs(config.startDate).format('YYYY-MM-DD')} />
        </div>
        <div className='flex flex-col gap-4'>
          <DetailItem title={t("Contract Address")} value={toParsedAddress(config.contractAddress)} />
          <DetailItem title={t("Blockchain")} value={t("Ethereum")} />
          <DetailItem title={t('End Date')} value={dayjs(config.endDate).format('YYYY-MM-DD')} />
        </div>
      </div>
    </div>
  );
};

export default DetailsWidget;
import DisplayIf from '@/components/conditionals/DisplayIf';
import { useAuth } from '@/client/home/useAuth';
import { toParsedAddress } from '@/client/home/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DisconnectButton from './DisconnectButton';
import Divider from '@/components/dividers/Divider/Divider';

interface WalletDetailsProps {
  className?: string;
}

const WalletDetails: React.FC<WalletDetailsProps> = ({ className }) => {
  const { address } = useAuth();

  const { t } = useTranslation();

  return (
    <DisplayIf condition={!!address}>
      <Divider className='mt-4' />
      <div className={`flex flex-row leading-none ${className}`}>
        <div className='flex flex-col'>
          <div className='text-gray-900 font-bold'>{t('Buying as')}</div>
          <div className='text-xs'>{toParsedAddress(String(address))}</div>
        </div>
        <div className='flex flex-grow'></div>
        <div>
          <DisconnectButton />
        </div>
      </div>
    </DisplayIf>
  );
};

export default WalletDetails;

import Button from '@/components/buttons/Button/Button';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { toParsedAddress } from '@/client/home/utils';
import DisconnectButton from './DisconnectButton';
import SecondaryButton from './SecondaryButton';

const ConnectButton: React.FC = () => {
  const { login, address } = useAuth();

  const { t } = useTranslation();

  return (
    <DisplayIf
      falsy={
          <SecondaryButton className='py-2 px-4' onClick={login} >
            {t('Connect Wallet')}
          </SecondaryButton>
      }
      condition={!!address}
    >
      <div className={`flex items-center gap-4 flex-row`}>
          <a className=' hover:text-pink-400 font-bold' href={`https://etherscan.io/address/${address}`}> {toParsedAddress(String(address))}</a>
          <DisconnectButton />
      </div>
    </DisplayIf>
  );
};

export default ConnectButton;

import Button from '@/components/buttons/Button/Button';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ConnectButton from './ConnectButton';
import { useNftDetails } from '@/client/home/useNftDetails';
import { useMint } from '@/client/home/useMint';
interface MintButtonProps {
  numberOfItems: number;
  className?: string;
}

const MintButton: React.FC<MintButtonProps> = ({ numberOfItems, className }) => {
  const { address } = useAuth();
  const { t } = useTranslation();
  const { isEligable } = useNftDetails();
  const { mint } = useMint();

  const handleOnClick = async () => {
    await mint();
  };

  return (
    <>
      <DisplayIf condition={!address}>
        <ConnectButton></ConnectButton>
      </DisplayIf>
      <DisplayIf condition={!isEligable && !!address}>
        <Button onClick={() => {}} className={`w-full border border-gray-500 p-2 bg-gray-600 text-white !rounded-md ${className}`}>
          {t('Ineligible For Mint')}
        </Button>
      </DisplayIf>
      <DisplayIf condition={!!isEligable && !!address}>
        <Button onClick={handleOnClick} className={`w-full border border-gray-500 p-2 bg-gray-900 text-white !rounded-md ${className}`}>
          {t('Mint')}
        </Button>
      </DisplayIf>
    </>
  );
};

export default MintButton;

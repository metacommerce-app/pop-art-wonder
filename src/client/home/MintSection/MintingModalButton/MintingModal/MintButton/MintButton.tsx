import Button from '@/components/buttons/Button/Button';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ConnectButton from './ConnectButton';
import { useNftDetails } from '@/client/home/useNftDetails';
import { useMint } from '@/client/home/useMint';
import { EngageEventTypes, useEngage } from '@/client/home/useEngage';
interface MintButtonProps {
  numberOfItems: number;
  className?: string;
}

const MintButton: React.FC<MintButtonProps> = ({ numberOfItems, className }) => {
  const { t } = useTranslation();
  const { isEligable } = useNftDetails();
  const { address } = useAuth();
  const { mint } = useMint();
  const { publishEvent } = useEngage();
  const handleOnClick = async () => {
    await mint();
  };

  if (!address) {
    return <ConnectButton></ConnectButton>;
  }

  return (
    <DisplayIf
      condition={isEligable}
      falsy={
        <Button
          onClick={() => {
            publishEvent(EngageEventTypes.ClickedIneligibleForMint, {
              walletAddress: address,
            });
          }}
          className={`w-full border border-gray-500 p-2 bg-gray-600 text-white !rounded-md ${className}`}
        >
          {t('Ineligible For Mint')}
        </Button>
      }
    >
      <Button onClick={handleOnClick} className={`w-full border border-gray-500 p-2 bg-gray-900 text-white !rounded-md ${className}`}>
        {t('Mint')}
      </Button>
    </DisplayIf>
  );
};

export default MintButton;

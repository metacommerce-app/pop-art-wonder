import Button from '@/components/buttons/Button/Button';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ConnectButton from '../../../../../../components/buttons/Button/ConnectButton';
import { useNftDetails } from '@/client/home/useNftDetails';
import { useMint } from '@/client/home/useMint';
import IneligibleMintForm from './IneligibleMintForm/IneligibleMintForm';
import PrimaryButton from '@/components/buttons/Button/PrimaryButton';
interface MintButtonProps {
  numberOfItems: number;
  className?: string;
}

const MintButton: React.FC<MintButtonProps> = ({ numberOfItems, className }) => {
  const { t } = useTranslation();
  const { isEligable } = useNftDetails();
  const { address } = useAuth();
  const { mint } = useMint();
  
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
        <IneligibleMintForm/>
      }
    >
      <PrimaryButton onClick={handleOnClick}>
        {t('Mint')}
      </PrimaryButton>
    </DisplayIf>
  );
};

export default MintButton;

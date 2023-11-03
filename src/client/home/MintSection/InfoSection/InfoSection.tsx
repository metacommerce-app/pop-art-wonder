import React from 'react';
import Widget from './Widget';
import { useTranslation } from 'react-i18next';
import { useNftDetails } from '@/client/home/useNftDetails';

const InfoSection: React.FC = () => {
  const { t } = useTranslation()
  const { totalMinted } = useNftDetails();
  
  /**
   * TODO: get that data from either the config or wagmi
   */
  return (
    <div className='grid grid-cols-3 w-full gap-auto my-4'>
      <Widget title={t("Mint Price")} value={t("Free")} />
      <Widget title={t('Total Minted')} value={String(totalMinted)} />
      <Widget title={t('Type')} value={t("Allowlist")} />
    </div>
  );
};

export default InfoSection;
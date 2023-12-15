import Button from '@/components/buttons/Button/Button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckoutModal from './MintingModal/MintingModal';
import SecondaryButton from '@/components/buttons/Button/SecondaryButton';

const MintCompleteButton: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  /**
   * TODO: in the mobile view, we want the modal to be full view
   */
  return (
    <>
      <SecondaryButton className='text-left' disabled={true}>{t('Minting is closed')}</SecondaryButton>
      <CheckoutModal open={open} onClose={closeModal} />
    </>
  );
};

export default MintCompleteButton;

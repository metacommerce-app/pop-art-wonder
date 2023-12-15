import Button from '@/components/buttons/Button/Button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckoutModal from './MintingModal/MintingModal';
import PrimaryButton from '@/components/buttons/Button/PrimaryButton';


const MintingModalButton: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  /**
   * TODO: in the mobile view, we want the modal to be full view
   */
  return (
    <>
      <PrimaryButton className='hover:bg-pink-500 text-left' onClick={openModal}>
        {t('Minting Now')}
      </PrimaryButton>
      <CheckoutModal open={open} onClose={closeModal} />
    </>
  );
};

export default MintingModalButton;
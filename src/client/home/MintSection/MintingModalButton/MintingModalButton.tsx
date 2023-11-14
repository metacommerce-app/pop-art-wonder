import Button from '@/components/buttons/Button/Button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckoutModal from './MintingModal/MintingModal';
import { FaArrowRight } from 'react-icons/fa';

interface MintingButtonProps {
  className?: string;
}

const MintingButton: React.FC<MintingButtonProps> = ({ className }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  /**
   * TODO: in the mobile view, we want the modal to be full view
   */
  return (
    <>
      <Button disabled={true} className={`group bg-gray-700 text-white flex flex-row items-center p-4 w-full rounded-md  ${className}`}>
        <div className='flex'>{t('Minting is closed')}</div>
        <div className='flex flex-grow'></div>
      </Button>
      <CheckoutModal open={open} onClose={closeModal} />
    </>
  );
};

export default MintingButton;

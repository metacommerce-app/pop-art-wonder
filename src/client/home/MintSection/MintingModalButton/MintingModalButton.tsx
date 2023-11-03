import Button from '@/components/buttons/Button/Button';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckoutModal from './MintingModal/MintingModal';
import { FaArrowRight } from 'react-icons/fa';
import { useMint } from '../../useMint';

interface MintingButtonProps {
  className?: string;
}

const MintingButton: React.FC<MintingButtonProps> = ({ className }) => {
  const { t } = useTranslation();
  const { mintState } = useMint();
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  /**
   * TODO: in the mobile view, we want the modal to be full view
   */
  return (
    <>
      <Button onClick={openModal} className={`group bg-pink-200 flex flex-row items-center p-4 w-full rounded-md hover:bg-gray-900 hover:text-white ${className}`}>
        <div className='flex'>{t('Mint Now')}</div>
        <div className='flex flex-grow'></div>
        <div className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-xs'>
          <FaArrowRight />
        </div>
      </Button>
      <CheckoutModal open={open} onClose={closeModal} />
    </>
  );
};

export default MintingButton;

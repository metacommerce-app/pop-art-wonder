import Modal from '@/components/modals/Modal';
import React, { use, useEffect, useState } from 'react';
import NumberOfItemsSelector from './NumberOfItemsSelector/NumberOfItemsSelector';
import OrderDetails from './OrderDetails/OrderDetails';
import MintButton from './MintButton/MintButton';
import { useNftDetails } from '@/client/home/useNftDetails';
import { MintState, useMint } from '@/client/home/useMint';
import DisplayIf from '@/components/conditionals/DisplayIf';
import MintLoader from './MintLoader/MintLoader';
import MintComplete from './MintComplete/MintComplete';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  const [ numberOfItems, setNumberOfItems ] = useState(0);
  const { voucher } = useNftDetails();
  const { mintState } = useMint();

  useEffect(() => {
    setNumberOfItems(voucher?.amount || 0);
  }, [voucher]);

  const handleChange = (value: number) => {
    setNumberOfItems(value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <DisplayIf condition={mintState === MintState.Pending}>
        <MintLoader />
      </DisplayIf>
      <DisplayIf condition={mintState !== MintState.Completed && mintState !== MintState.Pending}>
        <NumberOfItemsSelector isDisabled={true} numberOfItems={numberOfItems} onChange={handleChange} />
        <OrderDetails numberOfItems={numberOfItems} className='mb-4 ' />
        <MintButton numberOfItems={numberOfItems} className='mt-5' />
      </DisplayIf>
      <DisplayIf condition={mintState === MintState.Completed}>
        <MintComplete />
      </DisplayIf>
    </Modal>
  );
};

export default CheckoutModal;

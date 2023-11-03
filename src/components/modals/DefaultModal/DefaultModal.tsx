import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../buttons/Button/Button';
import Modal from '../Modal';

const DefaultModal: React.FC = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className='flex flex-col gap-1'>
      <div>{t('Default')}</div>
      <Button onClick={openModal}>{t('Open modal')}</Button>
      <Modal open={open} onClose={closeModal}>
        <div>{t('Modal')}</div>
        <div>{t('This is a modal')}</div>
      </Modal>
    </div>
  );
};

export default DefaultModal;

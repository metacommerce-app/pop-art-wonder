import Button from '@/components/buttons/Button/Button';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaSignOutAlt } from 'react-icons/fa';

interface DisconnectButtonProps {
  className?: string;
}

const DisconnectButton: React.FC<DisconnectButtonProps> = ({ className }) => {
  const { logout } = useAuth();

  const { t } = useTranslation();

  return (
    <Button onClick={logout} className='border border-gray-500 p-2 hover:text-white hover:bg-gray-900 hover:border-gray-900 !rounded-md !w-fit'>
      <div className='flex flex-row gap-1'>
        <div className='flex justify-center items-center'>
          <FaSignOutAlt />
        </div>
        <div className='flex flex-grow'></div>
        <div className='flex justify-center'>{t('Disconnect')}</div>
      </div>
    </Button>
  );
};

export default DisconnectButton;

import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSignOutAlt } from 'react-icons/fa';
import SecondaryButton from '@/components/buttons/Button/SecondaryButton';

interface DisconnectButtonProps {
  className?: string;
}

const DisconnectButton: React.FC<DisconnectButtonProps> = ({ className }) => {
  
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <SecondaryButton onClick={logout} className='py-2 px-4 hover:bg-gray-700'>
      <div className='flex flex-row gap-2 items-center'>
        <FaSignOutAlt />
        {t('Disconnect')}
      </div>
    </SecondaryButton>
  );
};

export default DisconnectButton;

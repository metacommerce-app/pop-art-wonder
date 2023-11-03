import Button from '@/components/buttons/Button/Button';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ConnectButtonProps {
  className?: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ className }) => {
  const { login } = useAuth();

  const { t } = useTranslation();

  return (
    <Button onClick={login} className={`w-full border border-gray-500 p-2 bg-gray-900 text-white !rounded-md ${className}`}>
      {t('Connect Wallet')}
    </Button>
  );
};

export default ConnectButton;

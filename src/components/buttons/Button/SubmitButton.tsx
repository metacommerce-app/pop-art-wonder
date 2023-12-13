import Button from '@/components/buttons/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SubmitButtonProps {
  className?: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ className, onClick}) => {
 
  const { t } = useTranslation();

  return (
    <Button onClick={onClick} className={`border border-gray-500 p-2 bg-gray-900 text-white !rounded-md w-1/4 ${className}`}>
      {t('Submit')}
    </Button>
  );
};

export default SubmitButton;

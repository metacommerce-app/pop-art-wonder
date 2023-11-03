import CircleButton from '@/components/buttons/Button/CircleButton';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PlusProps {
  onClick: () => void;
}

const Plus: React.FC<PlusProps> = ({onClick}) => {
  const { t } = useTranslation();

  return (
    <CircleButton onClick={onClick} className='border border-gray-500 hover:bg-gray-300'>
      {t("+")}
    </CircleButton>
  );
};

export default Plus;

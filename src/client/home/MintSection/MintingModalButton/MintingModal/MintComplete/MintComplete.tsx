import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMint } from '@/client/home/useMint';
import Image from 'next/image';
import Confetti from 'react-confetti';

interface ConnectButtonProps {
  className?: string;
}

const MintComplete: React.FC<ConnectButtonProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-center flex-col gap-4 '>
      <div className='relative w-full h-60 lg:h-96  rounded-2xl border-2 border-sky-950'>
        <Confetti></Confetti>
        <Image src='/the-evolution-of-art.png' alt='Hero image' className='dark:invert rounded-2xl' layout='fill' objectFit='cover' priority />
      </div>
      <div className='font-medium'>{t('Congrats on minting your new wonder!')}</div>
    </div>
  );
};

export default MintComplete;

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
        <Image src='/pop-art-crystals.gif' alt='Hero image' className='dark:invert rounded-2xl' layout='fill' objectFit='cover' priority />
      </div>
      <div className='text-center'>
        <div className='font-medium'>{t('Congrats on minting your new wonder!')}</div>
        <a className='hover:underline hover:text-pink-400' href='https://opensea.io/collection/popartwonders'>
          Check out the collection on OpenSea!
        </a>
      </div>
    </div>
  );
};

export default MintComplete;

import React from 'react';
import Header from './Header/Header';
import Divider from '@/components/dividers/Divider/Divider';
import InfoSection from './InfoSection/InfoSection';
import CountdownSection from './CountdownSection/CountdownSection';
import DetailsSection from './DetailsSection/DetailsSection';
import Footer from './Footer/Footer';
import MintingButton from './MintingModalButton/MintingModalButton';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { config } from '@/client/types/config';
import Button from '@/components/buttons/Button/Button';
import { useTransaction } from 'wagmi';
import { useTranslation } from 'react-i18next';

interface MintSectionProps {
  className?: string;
}

const MintSection: React.FC<MintSectionProps> = ({ className }) => {
  const now = new Date();
  const { t } = useTranslation();
  const isStarted = now.getTime() > new Date(config.startDate).getTime();
  const isFinished = now.getTime() > new Date(config.endDate).getTime();
  return (
    <div className={`flex justify-center flex-col w-full items-center h-full order-2 lg:order-1 ${className}`}>
      <div className='w-full lg:w-4/5'>
        <Header />
        <Divider className='mt-5' />
        <InfoSection />
        <Divider />
        <CountdownSection />
        <DisplayIf condition={isStarted}>
          <MintingButton className='mt-4' />
        </DisplayIf>
        <DetailsSection />
        <Footer className='' />
      </div>
    </div>
  );
};

export default MintSection;

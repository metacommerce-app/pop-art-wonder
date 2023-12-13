import React from 'react';
import Header from './Header/Header';
import Divider from '@/components/dividers/Divider/Divider';
import InfoSection from './InfoSection/InfoSection';
import CountdownSection from './CountdownSection/CountdownSection';
import DetailsSection from './DetailsSection/DetailsSection';
import Footer from './Footer/Footer';
import MintingModalButton from './MintingModalButton/MintingModalButton';
import DisplayIf from '@/components/conditionals/DisplayIf';
import { clientConfig } from '@/client/types/config';
import { useTranslation } from 'react-i18next';
import MintCompleteButton from './MintingModalButton/MintCompleteButton';

interface MintSectionProps {
  className?: string;
}

const MintSection: React.FC<MintSectionProps> = ({ className }) => {
  const now = new Date();
  const { t } = useTranslation();
  const isStarted = now.getTime() > new Date(clientConfig.startDate).getTime();
  const isFinished = now.getTime() > new Date(clientConfig.endDate).getTime();
  return (
    <div className={`flex justify-center flex-col w-full items-center h-full order-2 lg:order-1 ${className}`}>
      <div className='w-full lg:w-4/5'>
        <Header />
        <Divider className='mt-5' />
        <InfoSection />
        <Divider />
        <CountdownSection />
        <DisplayIf condition={!isStarted || isFinished}>
          <MintCompleteButton />
        </DisplayIf>
        <DisplayIf condition={isStarted && !isFinished}>
          <MintingModalButton />
        </DisplayIf>
        <DetailsSection />
        <Footer className='' />
      </div>
    </div>
  );
};

export default MintSection;

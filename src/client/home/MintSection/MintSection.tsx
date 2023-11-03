import React from 'react';
import Header from './Header/Header';
import Divider from '@/components/dividers/Divider/Divider';
import InfoSection from './InfoSection/InfoSection';
import CountdownSection from './CountdownSection/CountdownSection';
import DetailsSection from './DetailsSection/DetailsSection';
import Footer from './Footer/Footer';
import MintingButton from './MintingModalButton/MintingModalButton';

interface MintSectionProps {
  className?: string;
}

const MintSection: React.FC<MintSectionProps> = ({ className }) => {
  return (
    <div className={`flex justify-center flex-col w-full items-center h-full order-2 lg:order-1 ${className}`}>
      <div className='w-full lg:w-4/5'>
        <Header />
        <Divider className='mt-5' />
        <InfoSection />
        <Divider />
        <CountdownSection />
        <Divider />
        <MintingButton className='mt-4' />
        <DetailsSection />
        <Footer className='' />
      </div>
    </div>
  );
};

export default MintSection;
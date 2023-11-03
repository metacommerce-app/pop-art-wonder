import React from 'react';
import MintSection from './MintSection/MintSection';
import ImageSection from './ImageSection/ImageSection';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className }) => {

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-screen min-w-screen w-full flex-row items-center justify-between p-4  ${className}`}>
      <MintSection />
      <ImageSection />
    </div>
  );
};

export default HomePage;
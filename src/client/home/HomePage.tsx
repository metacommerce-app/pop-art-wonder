import React, { useEffect } from 'react';
import MintSection from './MintSection/MintSection';
import ImageSection from './ImageSection/ImageSection';
import { useAuth } from '@/client/home/useAuth';
import Header from './Header/Header';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className }) => {
  const { login, address} = useAuth();

  // We are using this to immediately prompt the user to connect their wallet when they visit the site

  useEffect(() =>{
    if (!address)  { 
      login();
    }
  }, [address, login]) 

  return (
    <div>
    <Header/>
      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-screen min-w-screen w-full flex-row items-center justify-between p-4 ${className}`}>
        <MintSection />
        <ImageSection />
      </div>
    </div>

  );
};

export default HomePage;
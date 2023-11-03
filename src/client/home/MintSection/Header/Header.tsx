import React from 'react';
import Title from './Title';
import CollectionSection from './CollectionSection/CollectionSection';
import Description from './Description';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title />
      <div className='flex flex-row gap-4 my-4'>
        <CollectionSection />
      </div>
      <Description />
    </div>
  );
};

export default Header;
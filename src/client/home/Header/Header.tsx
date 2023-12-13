import React from 'react';
import ConnectButton from '../../../components/buttons/Button/ConnectButton';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`pb-2 my-1 shadow-md sticky top-0 ${className ?? ''}`}>
      <div className='flex flex-row justify-end pr-8 '>
        <div>
            <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
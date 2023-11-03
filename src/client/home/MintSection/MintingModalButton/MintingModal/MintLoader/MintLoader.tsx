import Button from '@/components/buttons/Button/Button';
import { useAuth } from '@/client/home/useAuth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThreeDots } from 'react-loader-spinner';
import { useMint } from '@/client/home/useMint';

interface ConnectButtonProps {
  className?: string;
}

const MintLoader: React.FC<ConnectButtonProps> = ({className}) => {

  const { t } = useTranslation()
  const { txHash } = useMint()

  return (
    <div className=' flex items-center justify-center flex-col '>
          <ThreeDots 
            height="70" 
            width="70" 
            radius="9"
            color="#FBCFE8" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
            />
            <div className='my-4 font-medium text-md text-gray-800'>
              {t("Your ")}
              <a href={`https://etherscan.io/tx/${txHash}`} className='text-pink-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:text-blue-800 hover:cursor-pointer'>transaction</a>  
              {t(" is being mined")}  
            </div>    
        </div>
  );
};

export default MintLoader;
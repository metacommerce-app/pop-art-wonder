import { clientConfig } from '@/client/types/config';
import useEngage from '@/hooks/useEngage';
import { EngageEventTypes } from '@/types/engage';
import Link from 'next/link';
import React from 'react';
import { useAccount } from 'wagmi';

interface TwitterLinkProps {
  className?: string;
}

const TwitterLink: React.FC<TwitterLinkProps> = ({ className }) => {
  const { publishEvent } = useEngage();
  const { address } = useAccount();

  const handleOnClick = () => {
    publishEvent(EngageEventTypes.TwitterClicked, {
      walletAddress: address
    });
  }
  
  return (
    <Link onClick={handleOnClick} href={clientConfig.twitter.url} target='__blank'>
      <div className={`hover:underline hover:text-blue-700 ${className}`}>
        {clientConfig.twitter.handle}
      </div>
    </Link>
  );
};

export default TwitterLink;
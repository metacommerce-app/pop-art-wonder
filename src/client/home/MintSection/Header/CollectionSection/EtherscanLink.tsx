import { toParsedAddress } from '@/client/home/utils';
import { config } from '@/client/types/config';
import Link from 'next/link';
import React from 'react';

interface EtherscanLinkProps {
  className?: string;
}

const EtherscanLink: React.FC<EtherscanLinkProps> = ({ className }) => {
  return (
    <Link href={`https://etherscan.io/address/${config.contractAddress}`}>
      <div className={`hover:underline hover:text-blue-700 ${className}`}>
        {toParsedAddress(config.contractAddress)}
      </div>
    </Link>
  );
};

export default EtherscanLink;
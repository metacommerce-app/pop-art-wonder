import React from 'react';
import CollectionAvatar from './CollectionAvatar';
import EtherscanLink from './EtherscanLink';
import TwitterLink from './TwitterLink';

interface CollectionSectionProps {
  className?: string;
}

const CollectionSection: React.FC<CollectionSectionProps> = ({ className }) => {
  return (
    <div className='flex flex-row gap-2'>
      <div>
        <CollectionAvatar />
      </div>
      <div className='flex flex-col leading-none justify-center'>
        <EtherscanLink />
        <TwitterLink />
      </div>
    </div>
  );
};

export default CollectionSection;
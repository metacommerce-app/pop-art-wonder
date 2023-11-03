import Image from 'next/image';
import React from 'react';

interface CollectionAvatarProps {
  className?: string;
}

const CollectionAvatar: React.FC<CollectionAvatarProps> = ({ className }) => {
  return (
    <div className='flex border border-gray-900 rounded-full w-10 h-10 items-center justify-center'>
      <div className="relative w-6 h-6">
        <Image
          src="/collection-logo.png"
          alt="Collection Logo"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default CollectionAvatar;
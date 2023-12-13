import React from 'react';
import Image from 'next/image';

interface ImageSectionProps {
  className?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ className }) => {
  return (
    <div className='w-full flex justify-center order-1 lg:order-2 pb-4 lg:pb-0'>
      <div className='relative w-full h-60 lg:h-96 lg:w-2/3  shadow-2xl rounded-2xl'>
        <Image
          src="/pop-art-crystals.gif"
          alt="Hero image"
          className="dark:invert rounded-2xl"
          layout='fill'
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default ImageSection;
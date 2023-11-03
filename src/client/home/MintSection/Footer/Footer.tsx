import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GithubButton from './GithubButton';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={`flex flex-row ${className}`}>
      <div className='flex flex-row items-center'>
        <div>
          { t("Powered by") }
        </div>
        <div>
          <Link href="https://metacommerce.app" target='__blank'>
            <Image src="/metacommerce-logo.svg" width={210} height={60} alt="Metacommerce Logo" />
          </Link>
        </div>
      </div>
      <div className='flex flex-grow'></div>
      <div className='flex items-center hidden lg:block'>
        <GithubButton />
      </div>
    </div>
  );
};

export default Footer;
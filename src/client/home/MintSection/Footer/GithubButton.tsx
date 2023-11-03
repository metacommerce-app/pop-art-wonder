import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa'

interface GithubButtonProps {
  className?: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ className }) => {
  const { t } = useTranslation()
  
  return (
    <Link href="https://github.com/metacommerce-app/minting-website-template" target='__blank'>
      <div className={`border border-gray-900 p-2 bg-gray-900 text-white hover:text-gray-900 hover:bg-transparent hover:border-gray-900 !rounded-md !w-fit ${className}`}>
        <div className='flex flex-row gap-1'>
          <div className='flex justify-center items-center'>
            <FaGithub />
          </div>
          <div className='flex flex-grow'></div>
          <div className='flex justify-center'>
            {t("Use this template")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GithubButton;
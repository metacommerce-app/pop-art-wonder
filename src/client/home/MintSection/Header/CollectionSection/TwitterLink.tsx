import { config } from '@/client/types/config';
import Link from 'next/link';
import React from 'react';

interface TwitterLinkProps {
  className?: string;
}

const TwitterLink: React.FC<TwitterLinkProps> = ({ className }) => {
  return (
    <Link href={config.twitter.url} target='__blank'>
      <div className={`hover:underline hover:text-blue-700 ${className}`}>
        {config.twitter.handle}
      </div>
    </Link>
  );
};

export default TwitterLink;
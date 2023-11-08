import React, { useEffect, useMemo, useState } from 'react';
import { config } from '@/client/types/config';
import NftABI from './nft/NftABI';
import { EngageContext, EngageContextProps, EngageEventTypes } from '@/client/home/useEngage';
import { Engage } from '@metacommerce-app/engage-js';

interface EngageProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const EngageProvider: React.FC<EngageProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let engage: Engage = new Engage();

  const initailize = () => {
    engage.initialize({ apiKey: config.engageJsApiKey });
    setIsLoading(false);
  };

  useEffect(() => {
    initailize();
    return;
  });

  const publishEvent = async (eventType: EngageEventTypes, payload: Record<string, any>) => {
    engage.events.send({
      type: eventType,
      ...payload,
    });
  };

  const wrapper: EngageContextProps = useMemo(
    () => ({
      publishEvent,
    }),
    [publishEvent],
  );
  return <EngageContext.Provider value={wrapper}>{children}</EngageContext.Provider>;
};

export default EngageProvider;

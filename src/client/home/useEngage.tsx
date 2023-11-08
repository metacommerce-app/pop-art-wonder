import React from 'react';
export enum EngageEventTypes {
  WhitelistMinted = 'Whitelist Minted',
  ConnectedWallet = 'Connected Wallet',
  ClickedIneligibleForMint = 'Clicked Ineligible For Mint',
}
export interface EngageContextProps {
  publishEvent: (eventType: EngageEventTypes, e: Record<string, any>) => Promise<void>;
}

export const EngageContext = React.createContext<EngageContextProps>(undefined!);
export const useEngage = () => React.useContext(EngageContext);

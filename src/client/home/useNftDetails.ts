import React from 'react';

export interface GasDetails {
  priceUSD?: string;
  priceETH?: string;
}
export interface VoucherData {
  cost: number;
  amount: number;
  limit: number;
  nonce: number;
  fee: number;
  recipient: string;
  ref: string;
  signature: string;
}
export interface AllowlistWithVoucher {
   allowlist: {address: string, amount: number, voucher: VoucherData} []
}

export interface NftDetailsContextProps {
  isLoading: boolean;
  gas: GasDetails;
  totalMinted: number;
  voucher: VoucherData | undefined;
  isEligable: boolean;
}

export const NftDetailsContext = React.createContext<NftDetailsContextProps>(undefined!);
export const useNftDetails = () => React.useContext(NftDetailsContext);
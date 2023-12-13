import React, { useMemo, useState } from 'react';
import { MintContext, MintContextProps, MintState } from '@/client/home/useMint';
import { useContractWrite } from 'wagmi';
import { clientConfig } from '@/client/types/config';
import { useNftDetails } from '../client/home/useNftDetails';
import { waitForTransaction } from 'wagmi/actions';
import NftABI from './nft/NftABI';
import useEngage from '@/hooks/useEngage';
import { EngageEventTypes } from '@/types/engage';

interface MintProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const MintProvider: React.FC<MintProviderProps> = ({ children }) => {
  const { voucher } = useNftDetails();
  const { publishEvent } = useEngage();
  const [mintState, setMintstate] = useState<MintState>(MintState.NotStarted);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { writeAsync } = useContractWrite({
    abi: NftABI,
    functionName: 'whitelistMint',
    chainId: clientConfig.chainId,
    address: clientConfig.contractAddress as any,
    args: [voucher],
  });

  const mint = async () => {
    try {
      const tx = await writeAsync();
      setMintstate(MintState.Pending);
      const txHash = tx.hash;
      setTxHash(txHash);
      const receipt = await waitForTransaction({ hash: txHash as any, chainId: clientConfig.chainId });
      publishEvent(EngageEventTypes.WhitelistMinted, { txHash, walletAddress: voucher?.recipient, amount: voucher?.amount });
      setMintstate(MintState.Completed);
    } catch (error) {
      console.error(error);
      setMintstate(MintState.Failed);
    }
  };

  const wrapper: MintContextProps = useMemo(
    () => ({
      mint,
      txHash,
      mintState,
    }),
    [mintState, txHash, mintState],
  );

  return <MintContext.Provider value={wrapper}>{children}</MintContext.Provider>;
};

export default MintProvider;

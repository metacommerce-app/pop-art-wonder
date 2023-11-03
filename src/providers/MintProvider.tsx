import React, { useMemo, useState } from 'react';
import { MintContext, MintContextProps, MintState } from '@/client/home/useMint';
import { useContractWrite } from 'wagmi';
import { config } from '@/client/types/config';
import { useNftDetails } from '../client/home/useNftDetails';
import { waitForTransaction } from 'wagmi/actions';
import NftABI from './nft/NftABI';

interface MintProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const MintProvider: React.FC<MintProviderProps> = ({ children }) => {
  const { voucher } = useNftDetails();
  const [mintState, setMintstate] = useState<MintState>(MintState.NotStarted);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { writeAsync } = useContractWrite({
    abi: NftABI,
    functionName: 'whitelistMint',
    chainId: config.chainId,
    address: config.contractAddress as any,
    args: [voucher],
  });

  const mint = async () => {
    try {
      const tx = await writeAsync();
      setMintstate(MintState.Pending);
      const txHash = tx.hash;
      setTxHash(txHash);
      const receipt = await waitForTransaction({ hash: txHash as any, chainId: config.chainId });
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

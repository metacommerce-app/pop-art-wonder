import React, { useEffect, useMemo, useState } from 'react';
import DisplayIf from '../../components/conditionals/DisplayIf';
import PageSpinner from '@/components/spinners/PageSpinner';
import { GasDetails, NftDetailsContext, NftDetailsContextProps, VoucherData } from '../../client/home/useNftDetails';
import { useAccount, useContractRead, usePublicClient } from 'wagmi';
import { config } from '@/client/types/config';
import testsnapshot from './test.json';
import NftABI from './NftABI';

const CURRENT_NUMBER_MINTED = 1462;
const ETH_PRICE_URL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
interface NftDetailsProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const NftDetailsProvider: React.FC<NftDetailsProviderProps> = ({ children }) => {
  //
  const [totalMinted, setTotalMinted] = useState<number>(0);
  const { estimateContractGas, getGasPrice, readContract } = usePublicClient();
  const [gas, setGas] = useState<GasDetails>({});
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEligable, setIsEligible] = useState<boolean>(false);
  const [voucher, setVoucher] = useState<VoucherData | undefined>(undefined);

  const { refetch } = useContractRead({
    abi: NftABI,
    functionName: 'totalSupply',
    address: config.contractAddress as any,
    chainId: config.chainId,
  });

  /*
   * Initialize NFT Total Minted Metric
   */
  useEffect(() => {
    refetch()
      .then((res) => {
        setTotalMinted(Number(res.data) - CURRENT_NUMBER_MINTED);
      })
      .catch((err) => {
        console.error(err);
        setTotalMinted(0);
      });
  }, []);

  const refreshPriceData = async () => {
    if (address) {
      try {
        const res = await getGasPrice();
        const gas = await estimateContractGas({
          address: config.contractAddress as any,
          abi: NftABI,
          functionName: 'whitelistMint',
          args: [voucher],
          account: address as any,
        });

        const req = await fetch(ETH_PRICE_URL, { method: 'GET' });
        const price = (await req.json()) as any;
        const costInEth = (Number(res) * Number(gas)) / 10 ** 9 / 10 ** 9;

        setGas({
          priceETH: costInEth.toFixed(4),
          priceUSD: (price.USD * costInEth).toFixed(2),
        });
      } catch (err) {
        // If this fails then most likely they have already minted the NFT
        console.error(err);
        setIsEligible(false);
      }
    }
  };

  /*
   * If user is connected, check if they are eligible to mint
   */

  useEffect(() => {
    testsnapshot.allowlist.forEach((item) => {
      const foundAddress = item.address.toString().toLowerCase();
      if (address?.toLowerCase() === foundAddress) {
        setIsEligible(true);
        setVoucher(item.voucher);
      }
    });
    setIsLoading(false);
  }, [address]);

  /*
   * If they are eligible, get the price of gas
   */
  useEffect(() => {
    refreshPriceData();
    return;
  }, [voucher]);

  const wrapper: NftDetailsContextProps = useMemo(
    () => ({
      isLoading,
      gas,
      totalMinted,
      isEligable,
      voucher,
    }),
    [gas, totalMinted, isLoading, isEligable, voucher],
  );

  return (
    <NftDetailsContext.Provider value={wrapper}>
      <DisplayIf condition={!isLoading} falsy={<PageSpinner />}>
        {children}
      </DisplayIf>
    </NftDetailsContext.Provider>
  );
};

export default NftDetailsProvider;

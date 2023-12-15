import '@rainbow-me/rainbowkit/styles.css';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, goerli, sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import AuthProvider from '@/providers/AuthProvider';
import Head from 'next/head';
import { clientConfig } from '@/client/types/config';
import NftDetailsProvider from '@/providers/nft/NftDetailsProvier';
import MintProvider from '@/providers/MintProvider';
const { chains, publicClient } = configureChains([mainnet, goerli, sepolia], [alchemyProvider({ apiKey: clientConfig.alchemyId }), publicProvider()]);

const { connectors } = getDefaultWallets({ appName: clientConfig.appName, projectId: clientConfig.walletConnectProjectId, chains });

const wagmiConfig = createConfig({ autoConnect: true, connectors, publicClient });

/**
 * TODO: fix the font thing
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <AuthProvider>
            <NftDetailsProvider>
              <MintProvider>
                <Head>
                  <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' rel='stylesheet' />
                </Head>
                <Component {...pageProps} />
              </MintProvider>
            </NftDetailsProvider>
          </AuthProvider>
        </RainbowKitProvider>
    </WagmiConfig>
  );
}

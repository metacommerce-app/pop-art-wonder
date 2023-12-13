export const clientConfig = {
  appName: 'Crystals',
  description:
    'Art coming soon',
  contractAddress: '0xbba45e5b08233014fa676b1cd9345e58bda2582e',
  openseaUrl: 'https://opensea.io/collection/popartwonders',
  startDate: '2023-12-26T16:30:04.000Z',
  endDate: '2024-01-05T17:00:05.000Z',
  twitter: {
    url: 'https://twitter.com/popartcats',
    handle: '@popartcats',
  },
  chain: 'mainnet',
  chainId: 1,
  numberMinted: 1892,
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!,
};

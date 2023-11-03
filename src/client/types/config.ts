export const config = {
  appName: 'The Evolution of Art',
  description:
    'Become the co-owner of the second Pop Art Wonder called "The Evolution of Art". This painting is a tribute to the 16 most popular artworks in history. The painting will be revealed over 11 days from October 20th to November 4th.',
  contractAddress: '0xbba45e5b08233014fa676b1cd9345e58bda2582e',
  openseaUrl: 'https://opensea.io/collection/popartwonders',
  startDate: '2023-11-04T16:00:05.000Z',
  endDate: '2023-11-14T12:00:05.000Z',
  twitter: {
    url: 'https://twitter.com/popartcats',
    handle: '@popartcats',
  },
  chain: 'mainnet',
  chainId: 1,
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!,
};

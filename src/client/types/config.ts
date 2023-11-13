export const config = {
  appName: 'The Evolution of Art',
  description:
    'Become the co-owner of the second Pop Art Wonder called "The Evolution of Art". This painting is a tribute to the 16 most iconic artworks in history. Each minted NFT represents a fraction of the 79x79 inches painting and makes you the co-owner of the physical piece.',
  contractAddress: '0xbba45e5b08233014fa676b1cd9345e58bda2582e',
  openseaUrl: 'https://opensea.io/collection/popartwonders',
  startDate: '2023-11-04T16:30:04.000Z',
  endDate: '2023-11-14T16:00:05.000Z',
  twitter: {
    url: 'https://twitter.com/popartcats',
    handle: '@popartcats',
  },
  chain: 'mainnet',
  chainId: 1,
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!,
  engageJsApiKey: process.env.NEXT_PUBLIC_ENGAGE_JS_API_KEY!,
};

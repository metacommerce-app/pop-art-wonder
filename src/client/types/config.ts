export const config = {
  appName: "The Evolution of Art",
  description:
    'Become the co-owner of the second Pop Art Wonder called "The Evolution of Art". This painting is a tribute to the 16 most popular artworks in history. The painting will be revealed over 16 days from October 20th to November 4th.',
  contractAddress: "0x8f3ad4bffa66ba9e689881c80e5309af78b70e10",
  openseaUrl: "https://opensea.io/collection/popartwonders",
  startDate: "2023/11/04",
  endDate: "2023/11/14",
  twitter: {
    url: "https://twitter.com/popartcats",
    handle: "@popartcats",
  },
  chain: "sepolia",
  chainId: 11155111,
  walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID!,
  alchemyId: process.env.ALCHEMY_API_KEY!
};

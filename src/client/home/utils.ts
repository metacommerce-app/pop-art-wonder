export const toParsedAddress = (address: string) => {
  return `${address.slice(0, 8)}...${address.slice(address.length - 5, address.length)}`
}
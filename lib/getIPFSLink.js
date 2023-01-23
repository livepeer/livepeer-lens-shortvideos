/**
 *
 * @param hash - IPFS hash
 * @returns IPFS link
 */

const getIPFSLink = (hash) => {
  const gateway = "https://lens.infura-ipfs.io/ipfs/";

  return hash
    .replace(/^Qm[1-9A-Za-z]{44}/gm, `${gateway}${hash}`)
    .replace("https://ipfs.io/ipfs/", gateway)
    .replace("ipfs://", gateway);
};

export default getIPFSLink;

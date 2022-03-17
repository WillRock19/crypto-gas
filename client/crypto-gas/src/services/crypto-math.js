const oneEtherInGwei = 10 ** 9;

const gweiToEth = (valueInGwei) => {
  const numberOfEthers = 1;
  return ((valueInGwei * numberOfEthers) / oneEtherInGwei).toFixed(9);
};

export default gweiToEth;

const oneEtherInGwei = 10 ** 9;

const gweiToEth = (valueInGwei) => ((valueInGwei * 1) / oneEtherInGwei).toFixed(9);

export default gweiToEth;

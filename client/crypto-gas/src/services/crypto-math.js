const oneEtherInGwei = 10 ** 9;

export const gweiToEth = (valueInGwei) => {
  const numberOfEthers = 1;
  return ((valueInGwei * numberOfEthers) / oneEtherInGwei).toFixed(9);
};

export const precoEtherParaDecimal = (precoEtherNaoDecimal) => {
  const divisorParaTornarDecimal = 10 ** 8;
  return precoEtherNaoDecimal / divisorParaTornarDecimal;
};

export const converterEtherParaReais = (etherEmDolarOriginal, cotacaoDolarEmReais) => {
  const etherEmDolar = (typeof etherEmDolarOriginal === 'string')
    ? parseFloat(etherEmDolarOriginal)
    : etherEmDolarOriginal;

  const etherEmReais = precoEtherParaDecimal(etherEmDolar) * cotacaoDolarEmReais;
  return etherEmReais.toFixed(2);
};

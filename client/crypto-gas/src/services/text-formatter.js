const etherMask = (etherValue) => {
  const firstCharacterRegexSelector = /^([^\\*])/;
  return etherValue.toString().replace(firstCharacterRegexSelector, '$1.');
};

export default etherMask;

export const etherMask = (etherValue) => {
  const firstCharacterRegexSelector = /^([^\\*])/;
  return etherValue.toString().replace(firstCharacterRegexSelector, '$1.');
};

export const dateWithTwoDigitsAndDash = (date) => {
  if (!(date instanceof Date)) { return date; }

  const dateAsString = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return dateAsString.replaceAll(/\//g, '-');
};

const baseUrl = import.meta.env.VITE_ETHERSCAN_BASE_URI;

const getDataFromUrl = (urlToFetch) => fetch(urlToFetch)
  .then((response) => {
    if (!response.ok) {
      console.error('Could not retrieve information from the API.');
      return Promise.reject();
    }

    return response
      .json()
      .catch((error) => console.error(
        `Could not convert response to JSON. The following error occur:${error}`,
      ));
  })
  .then((json) => json.result);

export const fetchGasFees = () => {
  const gasOracleProperties = `/api?module=gastracker&action=gasoracle&apikey=${import.meta.env.VITE_ETHERSCAN_KEY}`;
  const urlToFetch = `${baseUrl}${gasOracleProperties}`;
  return getDataFromUrl(urlToFetch);
};

export const fetchConfirmationTimeFor = (gasPriceInGwei) => {
  const gasEstimationProperties = `?module=gastracker&action=gasestimate&gasprice=${gasPriceInGwei}&apikey=${import.meta.env.VITE_ETHERSCAN_KEY}`;
  const urlToFetch = `${baseUrl}${gasEstimationProperties}`;
  return urlToFetch(urlToFetch);
};

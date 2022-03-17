import { dateWithTwoDigitsAndDash } from './text-formatter';

const baseUrl = import.meta.env.VITE_COTACAO_DOLAR_BASE_URI;

const obterCotacaoDolarHoje = () => {
  const datacotacao = dateWithTwoDigitsAndDash(new Date());
  const parametros = `?@dataCotacao='${datacotacao}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda`;
  const urlParaBusca = `${baseUrl}${parametros}`;

  return fetch(urlParaBusca)
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
    .then((json) => json.value[0]);
};

export default obterCotacaoDolarHoje;

import { dateWithTwoDigitsAndDash } from './text-formatter';

const lidarComErrosOuRetornarBody = (respostaRequest) => {
  if (!respostaRequest.ok) {
    console.error('Could not retrieve information from the API.');
    return Promise.reject();
  }

  return respostaRequest
    .json()
    .catch((error) => console.error(
      `Could not convert response to JSON. The following error occur:${error}`,
    ));
};

const obterCotacaoVendaBC = () => {
  const baseUrl = import.meta.env.VITE_COTACAO_DOLAR_BASE_URI;
  const datacotacao = dateWithTwoDigitsAndDash(new Date());
  const parametros = `?@dataCotacao='${datacotacao}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda`;
  const urlParaBusca = `${baseUrl}${parametros}`;

  return fetch(urlParaBusca)
    .then(lidarComErrosOuRetornarBody)
    .then((json) => json.value[0]?.cotacaoVenda);
};

const obterCotacaoVendaAPIFallback = () => {
  const baseUrl = import.meta.env.VITE_COTACAO_DOLAR_FALLBACK_BASE_URI;
  return fetch(baseUrl)
    .then(lidarComErrosOuRetornarBody)
    .then((json) => parseFloat(json.USD.ask));
};

const obterCotacaoVendaDolarHoje = () => obterCotacaoVendaBC().then((resultado) => {
  if (resultado) return resultado;
  return obterCotacaoVendaAPIFallback();
});

export default obterCotacaoVendaDolarHoje;

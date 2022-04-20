import './Inicio.scss';
import { useEffect, useState } from 'react';
import { Navbar, Card } from '../../components';
import { fetchGasFees } from '../../services/etherscan-apis';
import { gweiToEth, converterEtherParaReais } from '../../services/crypto-math';
import eth from '../../images/currencies/eth.svg';
import obterCotacaoVendaDolarHoje from '../../services/financial-apis';
import obterEthEmDolar from '../../services/web3';

const stateInicialParaTaxaDeGas = {
  inReais: 0,
  inGwei: 0,
  inEth: 0,
};

const stateInicialPrecos = {
  etherEmReais: 0,
  taxaGasMinima: stateInicialParaTaxaDeGas,
  taxaGasProposta: stateInicialParaTaxaDeGas,
  taxaGasMaxima: stateInicialParaTaxaDeGas,
};

const novoStateParaTaxaDeGas = (taxaTransacaoEmGwei, umEtherEmReais) => {
  const taxaEmEth = gweiToEth(taxaTransacaoEmGwei);
  return {
    inReais: (taxaEmEth * umEtherEmReais).toFixed(6),
    inGwei: taxaTransacaoEmGwei,
    inEth: taxaEmEth,
  };
};

function Inicio() {
  const [precos, setPrecos] = useState(stateInicialPrecos);

  const atualizarPrecos = ({ SafeGasPrice, ProposeGasPrice, FastGasPrice }, umEtherEmReais) => {
    setPrecos((stateAnterior) => ({
      ...stateAnterior,
      etherEmReais: umEtherEmReais,
      taxaGasMinima: novoStateParaTaxaDeGas(SafeGasPrice, umEtherEmReais),
      taxaGasProposta: novoStateParaTaxaDeGas(ProposeGasPrice, umEtherEmReais),
      taxaGasMaxima: novoStateParaTaxaDeGas(FastGasPrice, umEtherEmReais),
    }));
  };

  useEffect(() => {
    Promise
      .all([fetchGasFees(), obterEthEmDolar(), obterCotacaoVendaDolarHoje()])
      .then(([precosGasParaTransacoes, umEtherEmDolarString, cotacaoDolarEmReais]) => {
        const umEtherEmReais = converterEtherParaReais(umEtherEmDolarString, cotacaoDolarEmReais);
        atualizarPrecos(precosGasParaTransacoes, umEtherEmReais);
      });
  }, []);

  return (
    <div id="inicio">
      <Navbar />
      <div className="d-flex align-items-center min-vh-50">
        <div className="container">
          <div className="row margin-bottom">
            <div className="text-center">
              <img alt="eth logo" className="height-20vh" src={eth} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <Card
                cotacaoEtherEmReais={precos.etherEmReais}
                taxaEmReais={precos.taxaGasMinima.inReais}
                taxaEmEth={precos.taxaGasMinima.inEth}
                taxaEmGwei={precos.taxaGasMinima.inGwei}
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐢"
                prioridade="Baixa"
              />
            </div>
            <div className="col-md-4">
              <Card
                cotacaoEtherEmReais={precos.etherEmReais}
                taxaEmReais={precos.taxaGasProposta.inReais}
                taxaEmEth={precos.taxaGasProposta.inEth}
                taxaEmGwei={precos.taxaGasProposta.inGwei}
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐧"
                prioridade="Média"
              />
            </div>
            <div className="col-md-4">
              <Card
                cotacaoEtherEmReais={precos.etherEmReais}
                taxaEmReais={precos.taxaGasMaxima.inReais}
                taxaEmEth={precos.taxaGasMaxima.inEth}
                taxaEmGwei={precos.taxaGasMaxima.inGwei}
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐇"
                prioridade="Alta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

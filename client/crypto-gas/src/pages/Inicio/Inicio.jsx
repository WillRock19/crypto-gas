import "./Inicio.scss";
import { useEffect, useState } from "react";
import eth from "../../images/currencies/eth.svg";
import { Navbar, Card } from "../../components";
import { fetchGasFees } from "../../services/etherscan-apis";
import { obterCotacaoDolarHoje } from "../../services/financial-apis";

import gweiToEth from "../../services/crypto-math";

const initialPricesState = {
  inGwei: "",
  inEth: "",
};

const etherCurrentPriceInDolars = 100.0;

function Inicio() {
  const [safePrices, setSafePrices] = useState(initialPricesState);
  const [proposePrices, setProposePrices] = useState(initialPricesState);
  const [fastPrices, setFastPrices] = useState(initialPricesState);

  const updatePrices = ({ SafeGasPrice, ProposeGasPrice, FastGasPrice }) => {
    setSafePrices((previousState) => ({
      ...previousState,
      inGwei: SafeGasPrice,
      inEth: gweiToEth(SafeGasPrice),
    }));

    setProposePrices((previousState) => ({
      ...previousState,
      inGwei: ProposeGasPrice,
      inEth: gweiToEth(ProposeGasPrice),
    }));

    setFastPrices((previousState) => ({
      ...previousState,
      inGwei: FastGasPrice,
      inEth: gweiToEth(FastGasPrice),
    }));
  };

  useEffect(() => {
    fetchGasFees().then((data) => {
      updatePrices(data);
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
                reais="180,01"
                ethereum={safePrices.inEth}
                gwei={safePrices.inGwei}
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐢"
                prioridade="Baixa"
              />
            </div>
            <div className="col-md-4">
              <Card
                reais="180,01"
                ethereum={proposePrices.inEth}
                gwei={proposePrices.inGwei}
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐧"
                prioridade="Média"
              />
            </div>
            <div className="col-md-4">
              <Card
                reais="180,01"
                ethereum={fastPrices.inEth}
                gwei={fastPrices.inGwei}
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

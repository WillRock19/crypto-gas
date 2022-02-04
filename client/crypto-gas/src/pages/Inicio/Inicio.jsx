import './Inicio.scss'
import eth from '../../images//currencies/eth.svg';
import { Navbar, Card } from '../../components';

const Inicio = () => {
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
                ethereum="0.0990"
                gwei="180"
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐢"
                prioridade="Baixa" />
            </div>
            <div className="col-md-4">
              <Card
                reais="180,01"
                ethereum="0.0990"
                gwei="180"
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐧"
                prioridade="Média" />
            </div>
            <div className="col-md-4">
              <Card
                reais="180,01"
                ethereum="0.0990"
                gwei="180"
                base="1"
                priority="1"
                tempoTransacao="3 mins"
                icone="🐇"
                prioridade="Alta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;


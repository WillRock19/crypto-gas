import PropTypes from 'prop-types';

function Card({
  icone, prioridade, taxaEmReais,
  taxaEmEth, taxaEmGwei, base,
  priority, tempoTransacao, cotacaoEtherEmReais,
}) {
  return (
    <div id="card" className="card text-white bg-dark mb-3">
      <div className="card-header">
        <span className="icone-prioridade">
          {icone}
        </span>
        <span>
          Prioridade
          {' '}
          {prioridade}
        </span>
      </div>
      <div className="card-body">
        <h2 className="card-title text-center">
          R$
          {taxaEmReais}
        </h2>
        <hr />
        <div className="card-content text-center">
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">
                {taxaEmEth}
                {' '}
                ETH
              </p>
            </div>
            <div className="col-md-6">
              <p className="card-text">
                {taxaEmGwei}
                {' '}
                Gwei
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">
                Base:
                {base}
              </p>
            </div>
            <div className="col-md-6">
              <p className="card-text">
                Priority:
                {priority}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Tempo de transação: ~
          {tempoTransacao}
        </small>
        <small className="text-muted">
          1 Eth está valendo: ~
          {cotacaoEtherEmReais}
        </small>
      </div>
    </div>
  );
}

Card.propTypes = {
  cotacaoEtherEmReais: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
  prioridade: PropTypes.string.isRequired,
  taxaEmReais: PropTypes.string.isRequired,
  taxaEmEth: PropTypes.string.isRequired,
  taxaEmGwei: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  tempoTransacao: PropTypes.string.isRequired,
};

export default Card;

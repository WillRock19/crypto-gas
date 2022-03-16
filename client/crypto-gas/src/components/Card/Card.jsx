import PropTypes from 'prop-types';

function Card({
  icone, prioridade, reais, ethereum, gwei, base, priority, tempoTransacao,
}) {
  return (
    <div id="card" className="card text-white bg-dark mb-3">
      <div className="card-header">
        {icone}
        {' '}
        Prioridade
        {' '}
        {prioridade}
      </div>
      <div className="card-body">
        <h2 className="card-title text-center">
          R$
          {reais}
        </h2>
        <hr />
        <div className="card-content text-center">
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">
                {ethereum}
                {' '}
                ETH
              </p>
            </div>
            <div className="col-md-6">
              <p className="card-text">
                {gwei}
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
      </div>
    </div>
  );
}

Card.propTypes = {
  icone: PropTypes.string.isRequired,
  prioridade: PropTypes.string.isRequired,
  reais: PropTypes.string.isRequired,
  ethereum: PropTypes.string.isRequired,
  gwei: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  tempoTransacao: PropTypes.string.isRequired,
};

export default Card;

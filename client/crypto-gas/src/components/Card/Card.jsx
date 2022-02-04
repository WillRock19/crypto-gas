const Card = (props) => {
  return (
    <div id="card" className="card text-white bg-dark mb-3">
      <div className="card-header">{props.icone} Prioridade {props.prioridade}</div>
      <div className="card-body">
        <h2 className="card-title text-center">R$ {props.reais}</h2>
        <hr />
        <div className="card-content text-center">
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">{props.ethereum} ETH</p>
            </div>
            <div className="col-md-6">
              <p className="card-text">{props.gwei} Gwei</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">Base: {props.base}</p>
            </div>
            <div className="col-md-6">
              <p className="card-text">Priority: {props.priority}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Tempo de transação: ~ {props.tempoTransacao}</small>
      </div>
    </div>
  );
}

export default Card;

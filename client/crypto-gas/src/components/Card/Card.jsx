const Card = () => {
  return (
    <div id="card" className="card text-white bg-dark mb-3">
      <div className="card-header">🐢 Prioridade Baixa</div>
      <div className="card-body">
        <h2 className="card-title text-center">R$ 180,00</h2>
        <hr />
        <div className="card-content text-center">
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">0.0992 ETH</p>
            </div>
            <div className="col-md-6">
              <p className="card-text">190 gwei</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">Base: 183</p>
            </div>
            <div className="col-md-6">
              <p className="card-text">Priority: 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Tempo de transação: ~ 3 mins</small>
      </div>
    </div>
  );
}

export default Card;

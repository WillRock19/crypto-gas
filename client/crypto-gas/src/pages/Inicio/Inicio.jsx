import './Inicio.scss'
import { Navbar, Card } from '../../components';

const Inicio = () => {
  return (
    <div id="inicio">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;


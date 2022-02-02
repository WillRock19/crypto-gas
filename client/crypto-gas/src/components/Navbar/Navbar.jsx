import logo from '../../images/logo.png';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div id="logo">
        <img alt="crypt-gas-logo" src={logo} />
      </div>
      <div id="menu">
        <ul>
          <li className="menu-item">
            <a>Gas fees</a>
          </li>
          <li className="menu-item">
            <a>About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

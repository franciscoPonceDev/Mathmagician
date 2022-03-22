import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magician</h1>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

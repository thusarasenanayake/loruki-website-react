import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Loruki</h1>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="#">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

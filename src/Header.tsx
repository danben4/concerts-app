import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './logo.svg';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <nav id="navbar" aria-label="Main menu" className="header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <ul className="navigation">
          <li className="navigation-item">
            <Link to="/" className="navigation-item-link">App</Link>
          </li>
          <li>
            <Link to="/games" className="navigation-item-link">Games</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
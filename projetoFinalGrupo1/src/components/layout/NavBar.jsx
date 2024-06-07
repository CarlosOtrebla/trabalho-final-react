import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Login from '../../pages/login/Login';

export function NavBar() {

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="main_list" id="mainListDiv">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
          </ul>
        </div>
        <div className="media_button">
          <button className="main_media_button" id="mediaButton">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import '../App.css';
import logo from '../logo.svg';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">0x.Flo</h1>
      </header>
    </div>
  );
}

export default Header;

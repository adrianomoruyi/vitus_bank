import React from 'react';
import './Header.css'; // Optional: For styling
import Logo from './banklogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="titleBox">
        <img src={Logo} className="logo"></img>
        <h1 className="title">Vitus Bank</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
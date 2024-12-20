import React, { useState, useEffect } from 'react';
import '../components/Header.css'; // Optional: For styling
import Logo from '../img/banklogo.png';

function Header (){  
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
import React, { useState, useEffect } from 'react';
import '../components/Header.css'; // Optional: For styling
import Logo from '../img/banklogo.png';

//Defining the Vitus header
function Header ({ text }){  
  return (
    <header className="header">
        <div className="titleBox">
        <img src={Logo} className="logo"></img>
        <h1 className="title">Vitus Bank</h1>
        </div>
        <h1 className="username">{text}</h1>
    </header>
  );
};

export default Header;
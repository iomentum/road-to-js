import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Logo
      </a>
      <div className="header-right">
        <a className="active" href="#regisyer">
          S'inscrire
        </a>
        <a href="#login">Se connecter</a>
      </div>
    </div>
  );
};

export default Header;

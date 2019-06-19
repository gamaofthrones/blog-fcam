import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo_okr.png";
import { HeaderBlog, HeaderLogo } from "./styles";

const Header = () => (
  <HeaderBlog>
    <div className="menu">
      <div className="menu-logo">
        <a to="#">
          <HeaderLogo>
            <img src={logo} alt="logo okr na prática" />
          </HeaderLogo>
        </a>
      </div>
      <nav className="menu-nav">
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#preco">Preço</a>
          </li>
          <li>
            <a href="#qualidade">Qualidade</a>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderBlog>
);

export default Header;

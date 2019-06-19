import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo_okr.png";
import { HeaderBlog, HeaderLogo } from "./styles";

const Header = () => (
  <HeaderBlog>
    <div className="menu">
      <div className="menu-logo">
        <a href="/">
          <HeaderLogo>
            <img src={logo} alt="logo okr na prática" />
          </HeaderLogo>
        </a>
      </div>
      <nav className="menu-nav">
        <ul>
          <li>
            <a href="#sobre">Matérias</a>
          </li>
          <li>
            <Link to="/ebook">E-book</Link>
          </li>
          <li>
            <a href="#preco">Sobre nós</a>
          </li>
          <li>
            <a href="#qualidade"> Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderBlog>
);

export default Header;

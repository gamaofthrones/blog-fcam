import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo_okr.png";
import { HeaderBlog, HeaderLogo } from "./styles";

const Header = () => (
  <HeaderBlog>
    <div className="menu">
      <div className="menu-logo">
        <Link to="/">
          <HeaderLogo>
            <img src={logo} alt="logo okr na prática" />
          </HeaderLogo>
        </Link>
      </div>
      <nav className="menu-nav">
        <ul>
          <li>
            <Link to="/ebook">Matérias</Link>
          </li>
          <li>
            <Link to="/ebook">E-book</Link>
          </li>
          <li>
            <Link to="/ebook">Sobre nós</Link>
          </li>
          <li>
            <Link to="/ebook"> Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderBlog>
);

export default Header;

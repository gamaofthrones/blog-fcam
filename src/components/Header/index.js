import React from "react";

import {
  HeaderBlog,
  HeaderContainer,
  HeaderLogo,
  HeaderNavigation
} from "./styles";

const Header = () => (
  <HeaderBlog>
    <HeaderContainer>
      <HeaderLogo><img src="/imgs/logo.png" alt="logo"/></HeaderLogo>
      <HeaderNavigation>
        <li>Categoria 1</li>
        <li>Categoria 1</li>
        <li>Categoria 1</li>
      </HeaderNavigation>
    </HeaderContainer>
  </HeaderBlog>
);

export default Header;

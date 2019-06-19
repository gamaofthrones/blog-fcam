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
      <HeaderLogo>Logo</HeaderLogo>
      <HeaderNavigation>
        <li>Categoria 1</li>
        <li>Categoria 1</li>
        <li>Categoria 1</li>
      </HeaderNavigation>
    </HeaderContainer>
  </HeaderBlog>
);

export default Header;

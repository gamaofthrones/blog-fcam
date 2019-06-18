import React from "react";

import { Container, Menu, NavMenu } from "./styles";

const Header = () => (
  <Container>
    <header>
      <Menu>Blog</Menu>
      <NavMenu>
        <li>
          <span>Link</span>
        </li>
      </NavMenu>
    </header>
  </Container>
);

export default Header;

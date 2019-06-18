import React, { Fragment } from "react";
import GlobalStyled from "./styles/global";

import Header from "./components/Header";

import Routes from "./routes";

const App = () => (
  <Fragment>
    <Header />
    <Routes />
    <GlobalStyled />
  </Fragment>
);

export default App;

import React, { Fragment } from "react";
import GlobalStyled from "./styles/global";

import Colors from "./styles/settings/colors";

import Header from "./components/Header";

import Routes from "./routes";

const App = () => (
  <Fragment>
    <Header />
    <Routes />
    <Colors />
    <GlobalStyled />
  </Fragment>
);

export default App;

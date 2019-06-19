
import React, { Fragment } from "react";
import GlobalStyled from "./styles/global";

import Colors from "./styles/settings/colors";

import Footer from "./components/Footer";

import Routes from "./routes";

const App = () => (
  <Fragment>
    <Routes />
    <Footer />
    <Colors />
    <GlobalStyled />
  </Fragment>
);

export default App;

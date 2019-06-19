import React, { Component, Fragment } from "react";
import GlobalStyled from "./styles/global";

import Colors from "./styles/settings/colors";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Routes from "./routes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nome: "",
      ip: "",
      tipo: "",
      posts: [],
      data_hora: "",
      teste: "teste"
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Routes teste={this.state.teste} />
        <Footer />
        <Colors />
        <GlobalStyled />
      </Fragment>
    );
  }
}

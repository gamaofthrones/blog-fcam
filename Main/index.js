import React, { Component, Fragment } from "react";
import { database } from "../../config/firebase";
import { Container, LeadForm } from "./styles";
import Helmet from 'react-helmet'

import { b2cDomain } from "../../consts/b2c_array";

import Destaque from "../../components/Destaque";

class Main extends Component {
  state = {
    email: "",
    nome: "",
    ip: "",
    tipo: "",
    data_hora: ""
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //componentDidMount = () => {};
  //const teste =  b2cDomain.some(d => d === address) ? "b2c": "b2b";

  async findMyIp() {
    const ip = await fetch("http://httpbin.org/ip");
    const dataIp = await ip.json();
    return dataIp.origin.split(",")[0];
  }

  handleSubmit = async e => {
    e.preventDefault();
    let { email, nome, ip, tipo, data_hora } = this.state; //
    const address = email.split("@").pop();

    ip = await this.findMyIp();
    tipo = b2cDomain.some(d => d === address) ? "b2c" : "b2b";
    data_hora = `${new Date()
      .toISOString()
      .slice(0, 10)} ${new Date().toLocaleTimeString()}`;

    const id = database.ref().push().key;
    const leads = {};

    leads["leads/" + id] = {
      email: email,
      nome: nome,
      ip: ip,
      tipo: tipo,
      data_hora: data_hora
    };

    database.ref().update(leads);
  };

  render() {
    const { email, nome } = this.state; //, ip, tipo, data_hora
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow, noarchive"/>
          <meta name="keywords" content="definição de okr, gestão, princípios okr, como funciona okr,
          gestão de negócios, erros okr, benefícios okr, solução okr, passos okr, metodologia okr"/>
          <title>OKR na Prática: o que é a metodologia e porque é essencial</title>
          <meta name="description" content="O que é; Definição; casos de sucesso e passo a passo
          para planejamento e execução do OKR na sua empresa."/>
        </Helmet>
        <Container>
          <LeadForm onSubmit={this.handleSubmit} type="post">
            <label htmlFor="nome">Nome</label>
            <input
              name="nome"
              id="nome"
              type="text"
              value={nome}
              onChange={this.handleInputChange}
            />
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={this.handleInputChange}
            />
            <button type="submit">Cadastrar</button>
          </LeadForm>
        </Container>
      </Fragment>
    );
  }
}

export default Main;

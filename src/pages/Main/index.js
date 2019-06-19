import React, { Component, Fragment } from "react";
import { database } from "../../config/firebase";
import { Container, LeadForm } from "./styles";

import { b2cDomain } from "../../consts/b2c_array";

import Header from "../../components/Header";
import Destaque from "../../components/Destaque";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nome: "",
      ip: "",
      tipo: "",
      posts: [],
      data_hora: ""
    };
    console.log(props, "");
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = async () => {
    const posts = await database.ref("posts");
    posts.on("value", async snapshot => {
      let p = await snapshot.val();
      this.setState({
        posts: p
      });
      this.getPosts();
    });
  };

  getPosts = async () => {
    await localStorage.setItem(
      "@Okrnapratica:posts",
      JSON.stringify([...this.state.posts])
    );
    console.log(this.state);
  };

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
        <Header />
        <Container>
          <Destaque>teste</Destaque>

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

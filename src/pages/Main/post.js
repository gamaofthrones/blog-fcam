import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { database } from "../../config/firebase";
import { Container, PostContainer, LeadContainer, LeadForm } from "./styles";

import { b2cDomain } from "../../consts/b2c_array";

import Header from "../../components/Header";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nome: "",
      loading: false,
      posts: [],
      post: "",
      teste: "",
      slug: this.props.match.params.slug
    };
  }
  async componentWillMount() {
    this.state.posts = await JSON.parse(
      localStorage.getItem("@Okrnapratica:posts")
    );

    this.state.post = await this.getPostRequest();
    console.log(this.state.post);
  }

  async getPostRequest() {
    this.state.posts = await this.state.posts.filter(Boolean);

    let res = await this.state.posts.filter(it =>
      new RegExp(this.state.slug || "", "i").test(it.slug)
    );
    console.log(res, "res[0]");
    this.state.post = res[0];

    return res[0];
  }
  async findMyIp() {
    const ip = await fetch("http://httpbin.org/ip");
    const dataIp = await ip.json();
    return dataIp.origin.split(",")[0];
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
    alert("Email cadastrado");
  };

  render() {
    const { email, nome } = this.state;
    console.log(this.state, "post render");
    const { post } = this.state;
    console.log(post);
    return (
      <Fragment>
        <Helmet>
          <title>Sobre - React Router com Helmet</title>
          <meta name="description" content={post.meta_descript} />
          <meta name="keywords" content={post.meta_kw} />
        </Helmet>
        <Header />
        <Container>
          <PostContainer>
            <h1>{post.Titulo}</h1>
            <p>{post.texto}</p>
            {/* <p>{this.state.post.Titulo}</p>
          <p>{this.state.post.texto}</p> */}
          </PostContainer>

          <LeadContainer>
            <LeadForm onSubmit={this.handleSubmit} type="post">
              <div>
                <strong>Entre para a lista!</strong>
                <p>
                  Receba conteúdos exclusivos e<br /> com prioridade.
                </p>
              </div>
              <input
                className="nome"
                name="nome"
                id="nome"
                placeholder="Qual o seu nome? "
                type="text"
                value={nome}
                onChange={this.handleInputChange}
              />

              <input
                name="email"
                className="email"
                id="email"
                type="text"
                value={email}
                placeholder="Qual o seu melhor e-mail?"
                onChange={this.handleInputChange}
              />
              <button type="submit">Cadastrar</button>
            </LeadForm>
          </LeadContainer>
        </Container>
      </Fragment>
    );
  }
}

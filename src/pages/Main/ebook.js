import React, { Fragment, Component } from "react";
import DownloadLink from "react-download-link";

import { b2cDomain } from "../../consts/b2c_array";
import { database } from "../../config/firebase";

import {
  Container,
  JumbotronContainer,
  EbookContent,
  EbookDescription,
  EbookForm,
  EbookFormHeader,
  EbookFormBody
} from "./styles";

import Header from "../../components/Header";

class Ebook extends Component {
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
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, nome } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <JumbotronContainer>
            <h1>O Guia Definitivo do OKR </h1>
            <h3>
              Tudo o que você precisa saber para utilizar esse metodologia para
              alcançar seus resultados{" "}
            </h3>
          </JumbotronContainer>
          <EbookContent>
            <EbookDescription>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/eBook%20OKR.png?alt=media&token=6dd70753-4dd7-4ed6-8851-8d8623ac4281"
                alt=""
              />
              <h3>
                Descubra como a Google, Amazon, LinkedIn e Spotify tornaram-se
                autoridade com a metodologia OKR
              </h3>
              <p>
                Aprenda a importância da flexibilidade e rapidez da gestão
                eficiente e os indicadores chave para a prática da metodologia
                OKR.
              </p>
              <h3>
                Conheça os benefícios e proteja-se contra os erros comuns na
                implementação
              </h3>
              <p>
                Veja neste eBook verá quais são as recomendações e objetivos
                para você conseguir ter uma gestão sólida e eficiente e
                estratégica com foco nos resultados. Também contará com: -
                Tópicos abordados de forma mais dinâmica e direta - Cases
                práticos - E muito mais!
              </p>
            </EbookDescription>
            <EbookForm>
              <EbookFormHeader>
                <h3>
                  Faça o <strong>download grátis</strong> aqui!
                </h3>
                <p>Basta preencher o formulário abaixo</p>
              </EbookFormHeader>
              <EbookFormBody>
                <form onSubmit={this.handleSubmit} type="post">
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
                </form>

                <p>
                  Ao realizar o download você também está autorizando a OKR na
                  prática a enviar conteúdos sobre a metodologia de seu
                  interesse. Respeitamos a sua privacidade e não fazemos spam,
                  confira nossa política.
                </p>
              </EbookFormBody>
            </EbookForm>
          </EbookContent>
          <DownloadLink
            className="hide"
            id="myBtn"
            filename="gs://blog-fcam.appspot.com/eBook OKR.pdf"
            exportFile={() => "My cached data"}
          >
            Save to disk
          </DownloadLink>
        </Container>
      </Fragment>
    );
  }
}

export default Ebook;

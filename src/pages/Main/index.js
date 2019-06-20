import React, { Component, Fragment } from "react";
import DownloadLink from "react-download-link";
import { database } from "../../config/firebase";
import { Link } from "react-router-dom";
import {
  Container,
  LeadForm,
  MateriasContainer,
  MateriaBox,
  MateriaWrapper,
  LeadContainer,
  EbookContainer,
  EbookWrapper,
  EbookImage,
  EbookActionArea
} from "./styles";

import { b2cDomain } from "../../consts/b2c_array";

import Header from "../../components/Header";
import Destaque from "../../components/Destaque";
import Materia from "../../components/Materia";

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
    alert("Email cadastrado");
  };

  render() {
    const { email, nome } = this.state; //, ip, tipo, data_hora
    return (
      <Fragment>
        <Header />
        <Container>
          <Destaque />
          <MateriasContainer>
            <MateriaWrapper>
              <MateriaBox>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/connected-circle.png?alt=media&token=e19ec4b5-c748-4d72-93d3-ea25df16b499"
                  alt=""
                />
                <h3>8 Benefícios de OKR</h3>
                <p>
                  <Link to="/post/blog/okr-beneficios">
                    A metodologia possui vários benefícios na implementação e na
                    execução dentro da empresa, bem como flexibilidade, modelo
                    não-tradicional e não-sistemático.{" "}
                  </Link>
                </p>
              </MateriaBox>
              <MateriaBox>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/photo-1522881451255-f59ad836fdfb%20(1).png?alt=media&token=88cd4c16-ca98-48a1-8d0d-4af0b708c426"
                  alt=""
                />
                <h3> OKR na prática</h3>
                <p>
                  <Link to="/post/blog/okr-beneficios">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam rem enim natus nihil illum est, hic similique quos
                    quia excepturi consequuntur veritatis doloribus asperiores
                    cum, alias a non sunt sequi.
                  </Link>
                </p>
              </MateriaBox>
            </MateriaWrapper>
          </MateriasContainer>
          <EbookContainer>
            <EbookWrapper>
              <EbookActionArea>
                <h3>Baixe nosso Ebook agora!</h3>
                <DownloadLink
                  filename="gs://blog-fcam.appspot.com/eBook OKR.pdf"
                  exportFile={() => "My cached data"}
                >
                  Baixar
                </DownloadLink>
              </EbookActionArea>
              <EbookImage>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/eBook%20OKR.png?alt=media&token=6dd70753-4dd7-4ed6-8851-8d8623ac4281"
                  alt=""
                />
              </EbookImage>
            </EbookWrapper>
          </EbookContainer>
          <MateriasContainer>
            <MateriaWrapper>
              <MateriaBox>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/photo-1535231540604-72e8fbaf8cdb.png?alt=media&token=07c6f403-eae2-44d3-bad7-78f74d6ef0ea"
                  alt=""
                />
                <h3>Ciclos para execução do OKR</h3>
                <p>
                  <Link to="/post/blog/okr-ciclos-de-execucao">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam rem enim natus nihil illum est, hic similique quos
                    quia excepturi consequuntur veritatis doloribus asperiores
                    cum, alias a non sunt sequi.
                  </Link>
                </p>
              </MateriaBox>
              <MateriaBox>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/error-404-note-is-written-white-sticker-that-hangs-with-clothespin-rope_76080-189.png?alt=media&token=4a86211e-f7d0-451c-9255-3d90c7e30471"
                  alt=""
                />
                <h3>Erros comuns no OKR </h3>
                <p>
                  <Link to="/post/blog/okr-erros-comuns">
                    A gente sabe que criar estratégias para uma empresa não é
                    uma tarefa fácil Muitos gestores e suas equipes não têm
                    alcançado o potencial máximo desta metodologia Para
                    conseguir extrair o máximo desta ferramenta selecionamos os
                    erros mais comuns durante a estruturação do OKR que você
                    deve evitar!
                  </Link>
                </p>
              </MateriaBox>
            </MateriaWrapper>
          </MateriasContainer>
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

export default Main;

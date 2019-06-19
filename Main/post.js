import React, { Component } from "react";
import { database } from "../../config/firebase";
import HeaderPost from "../../components/HeaderPost"
import Helmet from 'react-helmet'
// import { Container } from './styles';

export default class Post extends Component {
  state = {
    posts: [],
    post: "",
    slug: this.props.match.params.slug
  };

  async componentDidMount() {
    const posts = await database.ref("posts");
    const slug = this.props.match.params.slug;

    posts.on("value", async snapshot => {
      let p = await snapshot.val();
      this.setState({
        posts: p
      });
    });
    //const postSuccess = await this.getPostRequest(slug);
    //console.log(postSuccess);
    
    // this.setState({
    //   post: postSuccess
    // });
    // console.log(posts, "teste");
  }

  getPostRequest(slug) {
    let postList = this.state.posts;
    let res = postList.filter(it => new RegExp(slug, "i").test(it.slug));
    console.log(res[0]);
    return res[0];
  }
  render() {
    if (this.state.posts) this.getPostRequest(this.state.slug);

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow, noarchive"/>
          <meta name="keywords" content="criar okr, OKR, metas, implementação okr, o que é okr, passos okr,
          gestão de negócios, gestão ágil, cases okr, metas, gestão, metodologia okr"/>
          <title>OKR na Prática: o que é a metodologia e porque é essencial - Posts</title>
          <meta name="description" content="Encontre aqui tudo sobre OKR: erros mais comuns, casos de sucesso,
          ganhos que o OKR pode proporcionar, empresas que souberam usar o OKR, saiba mais sobre OKR."/>
        </Helmet>
        <HeaderPost></HeaderPost>
      </div>
    );
  }
}

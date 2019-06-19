import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { database } from "../../config/firebase";
// import { Container } from './styles';

import Header from "../../components/Header";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const slug = await this.props.match.params.slug;
    const postList = await this.state.posts;
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
  render() {
    //const teste = console.log(this.getPostRequest());
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
        <div>
          <p>{post.Titulo}</p>
          <p>{post.texto}</p>
          {/* <p>{this.state.post.Titulo}</p>
          <p>{this.state.post.texto}</p> */}
        </div>
      </Fragment>

    );
  }
}

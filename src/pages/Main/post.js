
import React, { Component } from "react";
import { database } from "../../config/firebase";
// import { Container } from './styles';

export default class Post extends Component {
  state = {
    loading: false,
    posts: [],
    post: "",
    teste: "",
    slug: this.props.match.params.slug
  };

  async componentDidMount() {
    this.state.posts = await JSON.parse(
      localStorage.getItem("@Okrnapratica:posts")
    );
    const slug = await this.props.match.params.slug;
    const postList = await this.state.posts;

    this.state.teste = await this.getPostRequest(slug, postList);
    console.log(this.state.slug);
  }

  async getPostRequest() {
    this.state.posts = await this.state.posts.filter(Boolean);
    let res = await this.state.posts.filter(it =>
      new RegExp(this.state.slug || "", "i").test(it.slug)
    );

    console.log(res[0]);
    return res[0];
  }
  render() {
    const teste = console.log(this.getPostRequest());
    console.log(teste);
    return (
      <div>
        <p>{this.state.slug}</p>
      </div>
    );
  }
}

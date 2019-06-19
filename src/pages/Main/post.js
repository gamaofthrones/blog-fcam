import React, { Component } from "react";
import { database } from "../../config/firebase";

import HeaderPost from "../../components/HeaderPost"

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
        <HeaderPost></HeaderPost>
      </div>
    );
  }
}

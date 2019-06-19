import React, { Component, Fragment } from "react";

import { database } from "../config/firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Post from "../pages/Main/post";
import Login from "../pages/Auth/login";
import Ebook from "../pages/Main/ebook";
import Admin from "../pages/Admin";

class Routes extends Component {
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
  }

  componentWillMount = async () => {
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
  render() {
    const { posts } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" render={() => <Main />} />

            <Route path="/post/blog/:slug" component={Post} />
            <Route path="/ebook" component={Ebook} />

            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Routes;

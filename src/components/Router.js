import { Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import uid from "uid";

import { firebaseAuth } from "../firebase/initFirebase";
import { login } from "../firebase/auth";
import { setUser, removeUser } from "../util/local";
import About from "../pages/about";
import Admin from "../pages/admin";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Error from "./404";
import Home from "../pages/";
import Login from "../pages/login";
import PostView from "./blog/post";
import Products from "../pages/products";
import ProductView from "./product/product";

import menu from "../components/header/menu.json";

const pages = [Home, Products, Blog, About, Contact];

const PrivateRoute = (props) => {
  const { component: Component, authed, path, onHandlerLogIn } = props;
  if (!authed) {
    return (
      <Route
        location={{ state: { authed, onHandlerLogIn } }}
        to="/login"
        render={(props) => <Login {...props} />}
      />
    );
  } else {
    if (path === "/admin") {
      return (
        <Route
          to={{ pathname: path, state: { props } }}
          render={(props) => <Component {...props} />}
        />
      );
    } else if (path === "/login") {
      return <Redirect to="/admin" />;
    }
  }
};

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthed: false,
    };
  }

  onHandlerLogIn = (e) => {
    e.preventDefault();
    const { user, pwd } = e.target;
    login(user.value, pwd.value).catch((err) => console.error(err));
  };

  componentDidMount() {
    //evaluar autenticacion
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {

      this.setState({
        isAuthed: user ? true : false,
      });
      this.state.isAuthed ? setUser() : removeUser();
    });
  }

  componentWillUnmount() {
    //destruir la sesion al hacer logout
    this.removeListener();
  }

  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" {...this.props} />

        {pages.map((Page, index) => (
          <Route
            exact
            key={uid(10)}
            path={`/${menu[index].toLowerCase()}`}
            render={(props) => <Page {...props} authed={this.state.isAuthed} />}
          />
        ))}

        <PrivateRoute
          exact
          path="/login"
          component={Login}
          onHandlerLogIn={this.onHandlerLogIn}
          authed={this.state.isAuthed}
        />

        <PrivateRoute
          exact
          path="/admin"
          authed={this.state.isAuthed}
          component={Admin}
        />
        <Route
          exact
          path="/blog/:id"
          render={(props) => (
            <PostView {...props} authed={this.state.isAuthed} />
          )}
        />
        <Route
          exact
          path="/productos/:id"
          render={(props) => (
            <ProductView {...props} authed={this.state.isAuthed} />
          )}
        />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Router;

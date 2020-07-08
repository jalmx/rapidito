import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Home from "../pages/";
import Blog from "../pages/blog";
import Error from "./404";

const Router = (props) => (
  <Switch>
    <Redirect exact from="/" to="/home"   {...props} />
    <Route path="/home" exact component={Home} {...props} />
    <Route path="/blog" component={Blog} {...props} />
    <Route  component={Error} {...props} />
  </Switch>
);

export default withRouter( Router);

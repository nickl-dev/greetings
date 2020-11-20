import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import SinglePost from "./views/SinglePost";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

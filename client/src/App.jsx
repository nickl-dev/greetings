import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import SinglePost from "./views/SinglePost.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

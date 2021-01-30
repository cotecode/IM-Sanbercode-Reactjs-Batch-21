import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import BookList from "./BookList";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/BookList">
            <BookList />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default Routes;

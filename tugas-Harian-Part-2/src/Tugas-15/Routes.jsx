import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DarkModeProvider, { DarkModeContext } from "./DarkModeProvider";
import Nav from "./Nav";
import Card from "../Tugas-9/Card";
import Table from "../Tugas-10/Table";
import Timer from "../Tugas-11/Timer";
import List from "../Tugas-12/List";
import HooksAxios from "../Tugas-13/HooksAxios";
import DaftarBuah from "../Tugas-14/DaftarBuah";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/Tugas-9">
            <Card />
          </Route>
          <Route exact path="/Tugas-10">
            <Table />
          </Route>
          <Route exact path="/Tugas-11">
            <Timer />
          </Route>
          <Route exact path="/Tugas-12">
            <List />
          </Route>
          <Route exact path="/Tugas-13">
            <HooksAxios />
          </Route>
          <Route exact path="/Tugas-14">
            <DaftarBuah />
          </Route>
          <Route exact path="/Tugas-15">
            <DarkModeProvider />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

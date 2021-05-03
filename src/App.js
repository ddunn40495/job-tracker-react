import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";

import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

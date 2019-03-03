import "@babel/polyfill";
import "./normalize.css";
import "./skeleton.css";
import "./main.css";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Collections from "./components/Collections";
import NewCollection from "./components/NewCollection";

const App = () => (
  <Router>
    <div className="container-fluid">
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route exact path="/collections" component={Collections} />
      <Route exact path="/collections/new" component={NewCollection} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

import "@babel/polyfill";
import "./normalize.css";
import "./skeleton.css";
import "./main.css";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Collections from "./components/Collections";
import NewCollection from "./components/NewCollection";
import Collection from "./components/Collection";

const App = () => (
  <Router>
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/collections/new" component={NewCollection} />
        <Route exact path="/collections/:collectionId" component={Collection} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

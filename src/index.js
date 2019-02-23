import "@babel/polyfill";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Home from "./Home";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

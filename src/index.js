import "@babel/polyfill";
import "./normalize.css";
import "./skeleton.css";
import "./main.css";
import ReactDOM from "react-dom";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

import settings from "../settings";
const { API_ROOT } = settings[process.env.NODE_ENV];

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Collections from "./components/Collections";
import NewCollection from "./components/NewCollection";
import Collection from "./components/Collection";

class App extends React.Component {
  state = {
    collections: []
  };

  componentDidMount() {
    this.fetchCollections();
  }

  fetchCollections = async () => {
    try {
      const res = await axios.get(`${API_ROOT}/api/collections`, {
        withCredentials: true
      });
      this.setState({
        collections: res.data.collections
      });
    } catch (err) {
      if (!err.response) throw err;
    }
  };

  addCollectionToList = c => {
    const newCollections = this.state.collections.slice();
    newCollections.push(c);
    this.setState({
      collections: newCollections
    });
  };

  removeCollectionFromList = id => {
    const newCollections = this.state.collections.filter(c => c._id !== id);
    this.setState({
      collections: newCollections
    });
  };

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route
              path="/home"
              render={props => (
                <Home collections={this.state.collections} {...props} />
              )}
            />
            <Route
              exact
              path="/collections"
              render={props => (
                <Collections collections={this.state.collections} {...props} />
              )}
            />
            <Route
              exact
              path="/collections/new"
              render={props => (
                <NewCollection
                  addCollectionToList={this.addCollectionToList}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/collections/:collectionId"
              render={props => (
                <Collection
                  removeCollectionFromList={this.removeCollectionFromList}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

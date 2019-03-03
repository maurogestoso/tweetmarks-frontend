import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import settings from "../../settings";
const { API_ROOT } = settings[process.env.NODE_ENV];

import Favourite from "./Favourite";
import AddToCollection from "./AddToCollection";
import Nav from "./Nav";

class Home extends React.Component {
  state = {
    selectedFavourite: null,
    modalIsOpen: false,
    favourites: [],
    user: {},
    collections: []
  };

  openModal = favourite => {
    this.setState({ modalIsOpen: true, selectedFavourite: favourite.id_str });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  afterOpenModal = () => {};

  componentDidMount = () => {
    this.fetchFavourites();
    this.fetchUserData();
    this.fetchCollections();
  };

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

  fetchUserData = async () => {
    try {
      const res = await axios.get(`${API_ROOT}/api/profile`, {
        withCredentials: true
      });
      this.setState({
        user: res.data.profile
      });
    } catch (err) {
      if (!err.response) throw err;
    }
  };

  fetchFavourites = async () => {
    try {
      const res = await axios.get(`${API_ROOT}/api/favorites`, {
        withCredentials: true
      });
      this.setState({
        favourites: res.data.favorites
      });
    } catch (err) {
      if (!err.response) throw err;
    }
  };

  render() {
    return (
      <div>
        <AddToCollection
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          afterOpenModal={this.afterOpenModal}
          collections={this.state.collections}
        />

        <Nav path={this.props.location.pathname} />
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Recent Favourites to Process</h1>

          <div>
            {this.state.favourites.map((f, i) => (
              <Favourite key={i} data={f} openModal={this.openModal} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    location: PropTypes.object.isRequired
  };
}

export default Home;

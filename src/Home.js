import React from 'react';
import axios from 'axios';
import settings from '../settings';
const {API_ROOT} = settings[process.env.NODE_ENV];

import Favourite from './Favourite';

class Home extends React.Component {
  state = {
    favourites: [],
  }

  componentDidMount = () => {
    this.fetchFavourites();
  }

  fetchFavourites = async () => {
    try {
      const res = await axios.get(
          `${API_ROOT}/api/favorites`,
          {withCredentials: true}
      );
      this.setState({
        favourites: res.data.tweets,
      });
    } catch (err) {
      if (!err.response) throw err;
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to your favourites</h1>
        <div>
          {this.state.favourites.map((f) => (
            <Favourite key={f.id} data={f} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

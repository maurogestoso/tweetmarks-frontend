import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import settings from "../settings";
const { API_ROOT } = settings[process.env.NODE_ENV];

class Welcome extends React.Component {
  componentWillMount = async () => {
    try {
      const res = await axios.get(`${API_ROOT}/auth`);
      if (res.status === 200) {
        this.props.history.push("/home");
      }
    } catch (err) {
      if (!err.response) throw err;
    }
  };

  render() {
    return (
      <a href={`${API_ROOT}/auth/sign-in`}>
        <button>Sign in to Twitter</button>
      </a>
    );
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };
}

export default Welcome;

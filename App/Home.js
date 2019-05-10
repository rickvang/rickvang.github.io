import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/proto1">Proto1</Link>
          </li>
          <li>
            <Link to="/proto2">Proto2</Link>
          </li>
          <li>
            <Link to="/proto3">Proto3</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;

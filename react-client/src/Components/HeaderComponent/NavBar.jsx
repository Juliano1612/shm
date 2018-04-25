import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
        <div className="ui secondary pointing menu">
            <a className="item active">
                <Link to="/">Home</Link>
            </a>
            <a className="item">
                <Link to="/about">About</Link>
            </a>
        </div>
    )
  }
}

export default NavBar;
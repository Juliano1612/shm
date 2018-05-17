import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="ui container marginBottom center aligned">
      <div className="ui secondary pointing menu compact">
            <Link to="/" className="item active"> Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/feed" className="item">Feed</Link>
            <Link to="/timeline" className="item">Timeline</Link>
            <Link to="/comochegar" className="item">Como Chegar</Link>
        </div>
      </div>
        
    )
  }
}

export default NavBar;
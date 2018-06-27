import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  componentDidMount (){
    console.log(location.pathname)
    switch (location.pathname){
      case "/": document.getElementById("home").classList.add("active"); break;
      case "/about": document.getElementById("about").classList.add("active"); break;
      case "/feed": document.getElementById("feed").classList.add("active"); break;
      case "/timeline": document.getElementById("timeline").classList.add("active"); break;
      case "/comochegar": document.getElementById("comochegar").classList.add("active"); break;
    }
  }
  render() {
    return (
      <div className="ui container marginBottom center aligned">
      <div className="ui secondary pointing menu compact">
            <Link to="/" className="item" id="home"> Home</Link>
            <Link to="/about" className="item" id="about">O Evento</Link>
            <Link to="/feed" className="item" id="feed">Colecione Momentos</Link>
            <Link to="/timeline" className="item" id="timeline">Nossa História</Link>
            <Link to="/comochegar" className="item" id="comochegar">Como Chegar</Link>
        </div>
      </div>
        
    )
  }
}

export default NavBar;
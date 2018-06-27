import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';

class Footer extends Component {
  
  render() {
    return (
      <footer className="ui basic segment footer center aligned">
        <SpotifyPlayer
          uri="spotify:user:pauloapanucci:playlist:6ikXAw008vaq0N6EHvObRI"
          size={{width: 300, height: 80}} 
          theme="white" 
          view="list" 
        />
      </footer>
    )
  }
}








export default Footer;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './../Pages/HomePage';
import About from './../Pages/About';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
            <Switch>
                <Route name="home" exact path="/" component={HomePage} />
                <Route name="about" exact path="/about" component={About} />
            </Switch>
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}

export default App;
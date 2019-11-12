import React, {Component} from 'react';
import Navigation from './NavComponent.js';
import Intro from './introduction.js';
import About from './about.js';
import Team from './ourTeam.js';
import Events from './events.js';
import Footer from './footer.js';


class Main extends Component {
  render() {
    return(
      <>
        <Navigation />
        <div className="container">
          <Intro/>
          <About/>
          <Team/>
          <Events/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Main;

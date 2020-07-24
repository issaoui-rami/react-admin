import React, { Component } from 'react';
import Header from './Components/Header.js';
import Menus from './Components/Menus.js';
import Tickets from './Components/Tickets.js';
import Footer from './Components/Footer.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Menus />
        <Tickets />
        <Footer />
      </div>
    );
  }
}

export default App;

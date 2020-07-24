import React, { Component } from 'react';
import Header from './Components/Header.js';
import Menus from './Components/Menus.js';
import Breadcrumb from './Components/Breadcrumb.js';
import Tickets from './Components/Tickets/Tickets.js';
import AddTicket from './Components/Tickets/AddTicket.js';
import Footer from './Components/Footer.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Menus />
        <div className="content-wrapper">
        <Breadcrumb />
        <Tickets />
        <AddTicket />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

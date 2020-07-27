import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Menus from './Components/Menus.js';
import Breadcrumb from './Components/Breadcrumb.js';
import DashboardTickets from './Components/Tickets/DashboardTickets.js';
import Tickets from './Components/Tickets/Tickets.js';
import AddTicket from './Components/Tickets/AddTicket.js';
import Footer from './Components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Menus />
          <div className="content-wrapper">
          <Breadcrumb />
          <Switch>
            <Route path="/tickets" component={Tickets} />
            <Route path="/addtickets" component={AddTicket} />
            <Route exact path="/" component={DashboardTickets} />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

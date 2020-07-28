import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Menus from './Components/Menus.js';
import Breadcrumb from './Components/Breadcrumb.js';
import DashboardTickets from './Components/Tickets/DashboardTickets.js';
import Tickets from './Components/Tickets/Tickets.js';
import AddTicket from './Components/Tickets/AddTicket.js';
import Projets from './Components/Projets/Projets.js';
import Footer from './Components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  state = {
    tickets : [
       {
        id: 1,
        project: 'Project23',
        subject: 'Application React js',
        description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès il est prêt ou que la mise en page est achevée.',
        status: 'Open',
        priority: 'Urgent',
        assignedTo: 'Samih derbeli',
        dateTicket: '27/05/2020',
        dateFin: '27/05/2020'
      }
    ]
  }


  deleteTicket = (id) => {
    let tickets = this.state.tickets;
    let i = tickets.findIndex(ticket => ticket.id === id)
    tickets.splice(i, 1)
    this.setState({tickets})
  }

  addTicket = (ticket) => {
    ticket.id = Math.random();
    let tickets = this.state.tickets;
    tickets.push(ticket);
    this.setState({ tickets });

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Menus />
          <div className="content-wrapper">
          <Breadcrumb />
          <Switch>
            <Route path="/tickets">
              <Tickets tickets={this.state.tickets} deleteTicket={this.deleteTicket}/>
            </Route>
            <Route path="/addtickets" >
              <AddTicket addTicket={this.addTicket} />
            </Route>
            <Route exact path="/projets" >
              <Projets />
            </Route>
            <Route exact path="/" >
              <DashboardTickets tickets={this.state.tickets} />
            </Route>
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class Menus extends Component {

  render() {
    return (
      <div>

      <aside className="main-sidebar">
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
            </div>
            <div className="pull-left info">
              <p>Issaoui Rami</p>
              <a href="fake_url">Developer Multimedia</a>
            </div>
          </div>

          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Recherche..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
            <ul className="sidebar-menu" data-widget="tree">

              <li>
                <NavLink to="/">
                  <i className="fa fa-dashboard" /> <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="treeview">
                <a href="fake_url">
                  <i className="fa fa-th" /> <span>Tickets</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <NavLink to="/addtickets">
                      <i className="fa fa-circle-o" /> Add Ticket
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tickets">
                      <i className="fa fa-circle-o" /> Tickets List
                    </NavLink>
                </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="fake_url">
                  <i className="fa fa-github" /> <span>Projets</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <NavLink to="/addprojet">
                      <i className="fa fa-circle-o" /> Add Projet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projets">
                      <i className="fa fa-circle-o" /> Projets List
                    </NavLink>
                </li>
                </ul>
              </li>

            </ul>
        </section>
      </aside>
      </div>
    );
  }
}

export default Menus;

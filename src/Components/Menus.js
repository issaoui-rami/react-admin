import React, { Component } from 'react';

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

            <li className="active treeview">
              <a href="fake_url">
                <i className="fa fa-dashboard" /> <span>Dashboard</span></a>
            </li>
            <li className="treeview">
              <a href="fake_url">
                <i className="fa fa-th" /> <span>Tickets</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="fake_url"><i className="fa fa-circle-o" /> Ajouter Ticket</a></li>
                <li><a href="fake_url"><i className="fa fa-circle-o" /> Tickets List</a></li>
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

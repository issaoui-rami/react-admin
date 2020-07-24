import React, { Component } from 'react';

export default class Breadcrumb extends Component {

  render() {
    return (
      <div>
          <section className="content-header">
            <h1>Page Title</h1>
            <ol className="breadcrumb">
              <li><a href="fake_url"><i className="fa fa-dashboard" /> Home</a></li>
              <li className="active">Page</li>
            </ol>
          </section>
      </div>
    );
  }
}

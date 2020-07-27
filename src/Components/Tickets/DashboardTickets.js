import React, { Component } from 'react';
import NonResolu from './NonResolu.js';
import TicketsGraph from './TicketsGraph.js';

export default class DashboardTickets extends Component {
  render() {
    return(
      <section class="content">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
             <div className="box-body">
                <NonResolu />
             </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="box">
             <div className="box-body">
                <TicketsGraph />
             </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

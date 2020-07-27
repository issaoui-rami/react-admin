import React, { Component } from 'react';

export default class TicketsGraph extends Component {
  render() {
    return(
      <div>
        <p className="text-center">
          <strong>Graph Tickets</strong>
        </p>
        <div className="progress-group">
          <span className="progress-text">In progress</span>
          <span className="progress-number"><b>160</b>/200</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-aqua" style={{width: '80%'}} />
          </div>
        </div>
        {/* /.progress-group */}
        <div className="progress-group">
          <span className="progress-text">Closed</span>
          <span className="progress-number"><b>310</b>/400</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-red" style={{width: '70%'}} />
          </div>
        </div>
        {/* /.progress-group */}
        <div className="progress-group">
          <span className="progress-text">Done</span>
          <span className="progress-number"><b>480</b>/800</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-green" style={{width: '85%'}} />
          </div>
        </div>
        {/* /.progress-group */}
        <div className="progress-group">
          <span className="progress-text">Waiting</span>
          <span className="progress-number"><b>250</b>/500</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} />
          </div>
        </div>
        {/* /.progress-group */}
      </div>
    )
  }
}

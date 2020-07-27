import React, { Component } from 'react';

export default class NonResolu extends Component {
  render() {
    return(

      <div className="table-responsive">
        <table className="table no-margin">
          <thead>
            <tr>
              <th>TicketID</th>
              <th>Project</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="fake_url">183</a></td>
              <td>P2003</td>
              <td><span className="label label-success">Approved</span></td>
            </tr>
            <tr>
              <td><a href="fake_url">10024</a></td>
              <td>P50114</td>
              <td><span className="label label-warning">In Progress</span></td>
            </tr>
            <tr>
              <td><a href="fake_url">10070</a></td>
              <td>P2050</td>
              <td><span className="label label-danger">Urgent</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

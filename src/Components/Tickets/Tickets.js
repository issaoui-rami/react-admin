import React, { Component } from 'react';

export default class Tickets extends Component {
  render() {
    return(
      <div>




             <section className="content">

             <div className="row">
                <div className="col-xs-12">
                  <div className="box">
                    <div className="box-header">
                      <h3 className="box-title">My support tickets</h3>
                      <div className="box-tools">
                        <div className="input-group input-group-sm" style={{width: '150px'}}>
                          <input type="text" name="table_search" className="form-control pull-right" placeholder="Recherche" />
                          <div className="input-group-btn">
                            <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody><tr>
                            <th>TicketID</th>
                            <th>Project</th>
                            <th>Requester</th>
                            <th>Assigned to</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Actions</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>P2001</td>
                            <td>Senda ben ali</td>
                            <td>Rami Issaoui</td>
                            <td>11-7-2014</td>
                            <td><span className="label label-danger">Urgente</span></td>
                            <td><span className="label label-success">Approved</span></td>
                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                            <td className="actions-fa">
                              <i className="fa fa-trash"></i>
                              <i className="fa fa-edit"></i>
                              <i className="fa fa-eye"></i></td>
                          </tr>


                        </tbody></table>
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
              </div>

             </section>
             {/* /.content */}

      </div>
    )
  }
}

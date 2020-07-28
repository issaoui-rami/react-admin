import React from 'react';


const NonResolu = (props) => {

  const { tickets } = props
  const length = tickets.length
  const listTickets = length ? (
    tickets.map(ticket => {
      return (
        <tr key={ticket.id}>
          <td>{ticket.id}</td>
          <td>{ticket.project}</td>
          <td>{ticket.dateFin}</td>
          <td><span className="label label-success">{ticket.status}</span></td>
      </tr>
      )
    })
  ) : (
      <tr className="text-center">
          <td colspan="8">
              <h3>List is empty</h3>
          </td>
      </tr>
  )

  return (
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="box">
           <div className="box-body">
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
          {listTickets}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default NonResolu;

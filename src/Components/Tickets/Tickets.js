import React from 'react'

const Tickets = (props) => {

  const { tickets, deleteTicket } = props
  const length = tickets.length
  const listTickets = length ? (
    tickets.map(ticket => {
      return (
        <tr key={ticket.id}>
          <td>{ticket.id}</td>
          <td>{ticket.project}</td>
          <td>{ticket.assignedTo}</td>
          <td>{ticket.dateTicket}</td>
          <td>{ticket.dateFin}</td>

          {(ticket.priority === 'Urgent') ? <td><span className="label label-danger">{ticket.priority}</span></td> : (ticket.priority === 'Low') ? <td><span className="label label-success">{ticket.priority}</span></td> : <td><span className="label label-warning">{ticket.priority}</span></td>}

          <td><span className="label label-warning">{ticket.status}</span></td>
          <td>{ticket.description}</td>
          <td className="actions-fa">
            <i className="fa fa-trash" onClick={() => deleteTicket(ticket.id)}></i>
            <i className="fa fa-edit"></i></td>
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
    <React.Fragment>
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
                                 <th>Assigned to</th>
                                 <th>Date</th>
                                 <th>Date deadline</th>
                                 <th>Priority</th>
                                 <th>Status</th>
                                 <th>Description</th>
                                 <th>Actions</th>
                               </tr>

                                 {listTickets}



                             </tbody></table>
                         </div>
                         {/* /.box-body */}
                       </div>
                       {/* /.box */}
                     </div>
                   </div>

                  </section>

    </React.Fragment>
  )
}

export default Tickets;

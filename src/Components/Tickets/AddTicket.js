import React, { Component } from 'react';

export default class AddTicket extends Component {

  state = {
        id: '',
        project: '',
        subject: '',
        description: '',
        status: '',
        priority: '',
        assignedTo: '',
        dateTicket: '',
        dateFin: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.addTicket(this.state)
      this.setState({
        id: '',
        project: '',
        subject: '',
        description: '',
        status: '',
        priority: '',
        assignedTo: '',
        dateTicket: '',
        dateFin: ''
      })
  }

  render() {
    return(
      <section className="content">
        <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">New ticket</h3>
        </div>
        {/* /.box-header */}
        <div className="box-body">
          <form onSubmit={this.handleSubmit}>
            {/* text input */}
            <div className="form-group">
              <label>Assigned To</label>
              <select className="form-control" name="project" onChange={this.handleChange} value={this.state.project}>
                <option value="" disabled>Choose Project...</option>
                <option value="P0112">P0112</option>
                <option value="P0015">P0015</option>
                <option value="P5510">P5510</option>
              </select>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control"
                name="subject"
                onChange={this.handleChange}
                value={this.state.subject}
                placeholder="Enter ..." />
            </div>

            {/* textarea */}
            <div className="form-group">
              <label>Description</label>
              <textarea className="form-control"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
                rows={4}
                placeholder="Enter ..."  />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control"
                    name="status"
                    onChange={this.handleChange}
                    value={this.state.status}>
                    <option value="" disabled>Choose a Status ...</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Solved">Solved</option>
                    <option vlaue="Closed">Closed</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Priority</label>
                  <select className="form-control"
                    name="priority"
                    onChange={this.handleChange}
                    value={this.state.priority}>
                    <option value="Low">Low</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Medium">Medium</option>
                    <option value="Normal">Normal</option>
                  </select>
                </div>
              </div>
            </div>
            {/* radio */}

            {/* select */}
            <div className="form-group">
              <label>Assigned To</label>
              <select className="form-control"
                name="assignedTo"
                onChange={this.handleChange}
                value={this.state.assignedTo}>
                <option  value="Rami Issaoui">Rami Issaoui</option>
                <option value="Samih daboussi">Samih daboussi</option>
                <option value="Yahya ayari">Yahya ayari</option>
                <option vlaue="Marwa youssfi">Marwa youssfi</option>
              </select>
            </div>

            <div className="form-group">
                <label>Date Creation :</label>
                  <input type="date" className="form-control form-conrol-lg"
                  name="dateTicket"
                  onChange={this.handleChange}
                  value={this.state.dateTicket} />
            </div>
            <div className="form-group">
                <label>Date deadline :</label>
                  <input type="date" className="form-control form-conrol-lg"
                  name="dateFin"
                  onChange={this.handleChange}
                  value={this.state.dateFin} />
            </div>

            <button className="btn bg-olive btn-flat margin">
              Add New Ticket
            </button>
          </form>
        </div>
        {/* /.box-body */}
        </div>
        </section>
    )
  }
}

import React, { Component } from 'react';

export default class AddTicket extends Component {
  render() {
    return(
      <div>
      <section className="content">
        <div className="box box-warning">
        <div className="box-header with-border">
          <h3 className="box-title">New ticket</h3>
        </div>
        {/* /.box-header */}
        <div className="box-body">
          <form>
            {/* text input */}
            <div className="form-group">
              <label>Project</label>
              <input type="text" className="form-control" placeholder="Enter ..." />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control" placeholder="Enter ..." />
            </div>

            {/* textarea */}
            <div className="form-group">
              <label>Description</label>
              <textarea className="form-control" rows={4} placeholder="Enter ..." defaultValue={""} />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
              <label>Status</label>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                    Open
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                    In Progress
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                    On Hold
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios4" defaultValue="option4" />
                    Solved
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios5" defaultValue="option5" />
                    Closed
                  </label>
                </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                <label>Priority</label>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios01" defaultValue="option1" defaultChecked />
                    <span className="label label-primary">Low</span>
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios02" defaultValue="option2" />
                    <span className="label label-danger">Urgent</span>
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios03" defaultValue="option3" />
                    <span className="label label-warning">Medium</span>
                  </label>
                </div>

                </div>
              </div>
            </div>
            {/* radio */}

            {/* select */}
            <div className="form-group">
              <label>Assigned To</label>
              <select className="form-control">
                <option>Rami Issaoui</option>
                <option>Ibrahim sfaxi</option>
                <option>Ahmed werteni</option>
                <option>test 2</option>
                <option>test 3</option>
              </select>
            </div>
            <div className="row">
              <div className="col-lg-6 form-group">
                  <label>Start Date:</label>
                  <div className="input-group date">
                    <div className="input-group-addon">
                      <i className="fa fa-calendar" />
                    </div>
                    <input type="text" className="form-control pull-right" id="datepicker" />
                  </div>
              </div>
              <div className="col-lg-6 form-group">
                  <label>End Date:</label>
                  <div className="input-group date">
                    <div className="input-group-addon">
                      <i className="fa fa-calendar" />
                    </div>
                    <input type="text" className="form-control pull-right" id="datepicker" />
                  </div>
              </div>
            </div>
            <button type="button" className="btn bg-olive btn-flat margin">Add New Ticket</button>
          </form>
        </div>
        {/* /.box-body */}
        </div>
        </section>
      </div>
    )
  }
}

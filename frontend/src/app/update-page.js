import React, { Component, Fragment } from "react";
import axios from "axios";

class UpdatePage extends Component {
  state = {
    notes: [],
    notesData: {
      id: "",
      userId: "",
      title: "",
      note: "",
    },
  };

  handleUpdate = (data) =>{
      this.setState({
          notesData : data
      })
  }

  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 mt-3 text-gray-800">Update Notes</h1>
        </div>
        <p class="mb-10">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

        <div className="row">
          <div className="card shadow mb-4 col-lg-12">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">My Note</h6>
            </div>
            <div className="card-body">
              <form class="m-2 col-lg-12">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Notes Title</label>
                  <input
                    type="text"
                    name="title"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onChange={this.handleFormChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Notes Body</label>
                  <textarea
                    class="form-control"
                    name="note"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={this.handleFormChange}
                  ></textarea>
                </div>
                <button
                  class="btn btn-primary float-right"
                  type="submit"
                  onClick={this.handleCreate}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UpdatePage;

import React, { Component, Fragment } from "react";
import "../assets/css/style.css";
import axios from 'axios'

import Notes from "../../src/modules/edit-component"

class EditComponent extends Component {
  state = {
    notes: [],
  };

  getAPI =()=>{
    axios.get("http://127.0.0.1:8000/api/note").then((res) => {
      this.setState({
        notes: res.data.articles,
      });
    });
  }

  componentDidMount() {
    this.getAPI();
  }

  handleEdit = () => {};

  handleDelete = (data) => {
    axios.delete(`http://127.0.0.1:8000/api/note/${data}`).then((res)=>{
      this.getAPI();
    })
  };

  render() {
    return (
      <Fragment>
        <h1 class="h3 mb-2 mt-3 text-gray-800">Edit Notes</h1>
        <p class="mb-10">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Note List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.notes.map((notes) => {
                    return <Notes data={notes} delete={this.handleDelete} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EditComponent;

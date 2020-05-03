import React, { Component, Fragment } from "react";
import "../assets/css/style.css";
import axios from "axios";

import Notes from "../../src/modules/edit-component";

class EditComponent extends Component {
  state = {
    notes: [],
  };

  getAPI = (token) => {
    axios
      .get("http://127.0.0.1:8000/api/note", {
        headers: {
          Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODQ4Njg1NiwiZXhwIjoxNTg4NDkwNDU2LCJuYmYiOjE1ODg0ODY4NTYsImp0aSI6IkpxaVk3UUs5NVc3M1BvU20iLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.2tc51U0stCjh2fulFUF8xxRca-Muvg0OD4QELI5mgfU",
        },
      })
      .then((res) => {
        this.setState({
          notes: res.data.data,
        });
      });
  };

  componentDidMount() {
    this.getAPI();
  }

  handleEdit = (data) => {};

  handleDelete = (data,token) => {
    let config = {
      headers: {
        Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODQ4Njg1NiwiZXhwIjoxNTg4NDkwNDU2LCJuYmYiOjE1ODg0ODY4NTYsImp0aSI6IkpxaVk3UUs5NVc3M1BvU20iLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.2tc51U0stCjh2fulFUF8xxRca-Muvg0OD4QELI5mgfU",
      },
    };

    axios.delete(`http://127.0.0.1:8000/api/note/${data}`,config).then((res) => {
      console.log("delete: " , data)
      this.getAPI();
    });
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
                    return (
                      <Notes
                        data={notes}
                        remove={this.handleDelete}
                        update={this.handleEdit}
                      />
                    );
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

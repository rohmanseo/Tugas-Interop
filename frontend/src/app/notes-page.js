import React, { Component, Fragment } from "react";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/style.css";
import axios from "axios";
// import component
import Notes from "../../src/modules/notes-component";

class NotesPage extends Component {
  state = {
    notes: [],
  };

  componentDidMount(token) {
    let config = {
      headers: {
        Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODQ4Njg1NiwiZXhwIjoxNTg4NDkwNDU2LCJuYmYiOjE1ODg0ODY4NTYsImp0aSI6IkpxaVk3UUs5NVc3M1BvU20iLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.2tc51U0stCjh2fulFUF8xxRca-Muvg0OD4QELI5mgfU",
      },
    };

    axios.get("http://127.0.0.1:8000/api/note", config).then((res) => {
      this.setState(
        {
          notes: res.data.data,
        },
        () => {
          console.log(this.state.notes);
        }
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 mt-3 text-gray-800">Notes Page</h1>
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
          {this.state.notes.map((notes) => {
            return <Notes data={notes} />;
          })}
        </div>
      </Fragment>
    );
  }
}
//apa?
export default NotesPage;

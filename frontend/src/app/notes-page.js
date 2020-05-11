import React, { Component, Fragment } from "react";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/style.css";
import axios from "axios";
import Cookies from 'universal-cookie';
// import component
import Notes from "../../src/modules/notes-component";
const cookies = new Cookies();

class NotesPage extends Component {
  state = {
    notes: [],
  };
  componentDidMount() {
    // let config = {
    //   headers: {
    //     Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODQ4Njg1NiwiZXhwIjoxNTg4NDkwNDU2LCJuYmYiOjE1ODg0ODY4NTYsImp0aSI6IkpxaVk3UUs5NVc3M1BvU20iLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.2tc51U0stCjh2fulFUF8xxRca-Muvg0OD4QELI5mgfU",
    //   },
    // };

    var token = cookies.get('access_token');

    axios.get("http://127.0.0.1:8000/api/note", 
    {headers: {"Authorization" : `Bearer ${token}`}}).then(
      (res) => {
        console.log(res.data.data);
        this.setState(
                {
                  notes: res.data.data,
                })
      }).catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 mt-3 text-gray-800">Notes Page</h1>
        </div>

        <p class="mb-10">
          List of your current notes. The notes are sorted from the old to the newest note
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

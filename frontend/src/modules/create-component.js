import React, { Component, Fragment } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import '../../src/assets/css/style.css'
const cookies = new Cookies();

class CreateComponent extends Component {
  state = {
    noteTitle: '',
    noteBody: ''
  };

  handleTitleChange = (event) => {
    this.setState({
      noteTitle: event.target.value
    })
  }

  handleBodyChange = (event) => {
    console.log(event.target.value)
    this.setState({
      noteBody: event.target.value
    })
  }

  handleCreate = (event) => {
    this.saveNotes(event);
  }

  saveNotes = (event) => {

    event.preventDefault();
    var token = cookies.get('access_token');
    let config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    var data = {
      title: this.state.noteTitle,
      note: this.state.noteBody
    };

  console.log(data)

    axios
      .post("http://127.0.0.1:8000/api/note", data,config)
      .then(
        (res) => {
          console.log(res);
          this.props.history.push('/dashboard')
          this.setState({
            noteTitle: '',
            noteBody: ''
          })
        },
        (er) => {
          console.log("err : ", er.response);
        }
      );
  };

  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 mt-3 text-gray-800">Create Notes</h1>
        </div>
        <p class="mb-10">
          Create new notes by inserting the title and body on the box below.
        </p>

        <div className="row">
          <div className="card shadow mb-4 col-lg-12">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">New Note</h6>
            </div>
            <div className="card-body">
              <form class="m-2 col-lg-12" onSubmit={this.handleCreate}>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Notes Title</label>
                  <input
                    type="text"
                    name="title"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={this.state.noteTitle}
                    onChange={this.handleTitleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Notes Body</label>
                  <textarea
                    class="form-control"
                    name="note"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={this.handleBodyChange}
                    value = {this.state.noteBody}
                  ></textarea>
                </div>
                <button
                  class="btn btn-primary float-right"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateComponent;
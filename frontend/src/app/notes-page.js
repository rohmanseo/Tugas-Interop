import React, {Component,Fragment} from 'react'
import '../assets/css/sb-admin-2.min.css'
import '../assets/css/style.css'
import axios from 'axios'
// import component
import Notes from "../../src/modules/notes-component";

class NotesPage extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://127.0.0.1:8000/api/note"
      )
      .then((res) => {
        this.setState({
          notes: res.data.articles,
        });
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
            return <Notes title={notes.author} body={notes.description} />;
          })}
        </div>
      </Fragment>
    );
  }
}
//apa?
export default NotesPage;

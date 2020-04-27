import React, { Component, Fragment } from "react";
import axios from "axios";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/style.css";

// import component
import Sidebar from "../../src/common/layout/sidebar";
import Topbar from "../../src/common/layout/top-navbar";
import Notes from "../../src/modules/notes-component";

class NotesPage extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-27&sortBy=publishedAt&apiKey=59cd337ba1fc4ae2ab7d748848627be8"
      )
      .then((res) => {
        const notes = res.data.articles;
        console.log(notes);
      });
  }

  render() {
    return <Notes />;
  }
}
//apa?
export default NotesPage;

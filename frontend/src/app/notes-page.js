import React, { Component, Fragment } from "react";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/style.css";

// import component
import Sidebar from "../../src/common/layout/sidebar";
import Topbar from "../../src/common/layout/top-navbar";
import Notes from "../../src/modules/notes-component";

class NotesPage extends Component {
  render() {
    return (

        <Notes />

    );
  }
}

export default NotesPage;

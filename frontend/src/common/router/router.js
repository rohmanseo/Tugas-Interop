import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

// component
import Sidebar from "../layout/sidebar";
import Topbar from "../layout/top-navbar";
import Notes from "../../app/notes-page";
import EditNotes from "../../app/edit-page";
import CreateNotes from "../../modules/create-component";


class LoginComponent extends Component {
  render() {
    return (
      <Fragment>
        <body id="page-top">
          <div id="wrapper">
            <Sidebar />

            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Topbar />

                <div class="container-fluid">
                    <Route exact path="/" component={Notes}/>
                    <Route exact path="/edit" component={EditNotes}/>
                    <Route exact path="/create" component={CreateNotes}/>
                </div>

                <footer class="sticky-footer bg-white">
                  <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                      <span>Copyright &copy; Notes Management 2020</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </body>
      </Fragment>
    );
  }
}

export default LoginComponent;

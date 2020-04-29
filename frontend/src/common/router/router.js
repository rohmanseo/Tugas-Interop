import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// component
import Sidebar from "../layout/sidebar";
import Topbar from "../layout/top-navbar";
import Notes from "../../app/notes-page";
import EditNotes from "../../app/edit-page";
import CreateNotes from "../../modules/create-component";
import LandingComponent from "../../modules/login-component";
import RegisterComponent from "../../modules/register-component";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingComponent} />
          <Route exact path="/register" component={RegisterComponent} />
          <Route path="/dashboard" component={DashboardComponent} />
        </Switch>
      </>
    );
  }
}

class DashboardComponent extends Component {
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
                  <Switch>
                    <Route exact path="/dashboard" component={Notes} />
                    <Route path="/dashboard/create/" component={CreateNotes} />
                    <Route path="/dashboard/edit/" component={EditNotes} />
                  </Switch>
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

export default App;

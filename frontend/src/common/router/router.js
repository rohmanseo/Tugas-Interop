import React, { Component, Fragment } from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import './style.css';


// component
import Sidebar from "../layout/sidebar";
import Topbar from "../layout/top-navbar";
import Notes from "../../app/notes-page";
import UpdateNotes from "../../app/update-page";
import EditNotes from "../../app/edit-page";
import CreateNotes from "../../modules/create-component";
import LandingComponent from "../../modules/login-component";
import RegisterComponent from "../../modules/register-component";
import AboutComponent from "../../modules/about-component";
const cookies = new Cookies();

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
    if(cookies.get('access_token') == null){
      return(
      <Redirect to="/" />
      );
    }
    return (
      <Fragment>
        <body id="page-top">
          <div id="wrapper">
            <Sidebar />

            <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Topbar {...this.props}/>

                <div class="container-fluid">
                  <Switch>
                    <Route exact path="/dashboard" component={Notes} />
                    <Route path="/dashboard/create/" component={CreateNotes} />
                    <Route path="/dashboard/edit/" component={EditNotes} />
                    <Route path="/dashboard/update/" component={UpdateNotes} />
                    <Route path="/dashboard/about/" component={AboutComponent} />
                  </Switch>
                </div>

                <footer class="sticky-footer bg-white">
                  <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                      <span className="myFooter">Copyright &copy; Notes Management 2020</span>
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

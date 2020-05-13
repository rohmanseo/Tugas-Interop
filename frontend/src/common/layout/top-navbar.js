import React, { Component } from "react";
import {
  Dropdown,
  DropdownButton,
  FormControl,
  Form,
  FormCheck,
  Button,
} from "react-bootstrap";
import LoginComponent from "../../modules/login-component"
import './top-navbar.css';
import Cookies from 'universal-cookie';
import {Route,Link, Redirect,withRouter} from 'react-router-dom'


const cookies = new Cookies();

class TopBar extends Component {

  constructor(props){
    super(props)
    
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e){
    this.props.history.push('/')
    cookies.remove('access_token',{ path: '/' })
  }

  render() {
    return (
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button>

        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fa fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-search fa-fw"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fa fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <div class="topbar-divider d-none d-sm-block"></div>

          <li class="nav-item dropdown no-arrow">
          </li>
          <li><button type="button" onClick={this.handleLogout} class="btn btn-outline-primary">Logout</button></li>
        </ul>
      </nav>
    );
  }
}

export default TopBar;

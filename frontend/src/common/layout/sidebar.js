import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./top-navbar.css";

class sidebar extends Component {
  render() {
    return (
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Notes Management</div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <Link class="nav-link" to="/dashboard/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span class="material-icons">import_contacts</span>
            <p className="side">All Notes</p>
          </Link>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <Link class="nav-link" to="/dashboard/create">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span class="material-icons">create</span>
            <p className="side">Create Notes</p>
          </Link>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <Link class="nav-link" to="/dashboard/edit">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span class="material-icons">edit_attributes</span>
            <p className="side">Edit Notes</p>
          </Link>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <Link class="nav-link" to="/dashboard/about">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span class="material-icons">contact_support</span>
            <p className="side">About Notes</p>
          </Link>
        </li>
      </ul>
    );
  }
}

export default sidebar;

import React, { Component, Fragment } from "react";

class NotesComponent extends Component {
  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 m-3 text-gray-800">Notes Page</h1>
        </div>

        <div className="row">
          <div class="card shadow mb-4 col-lg-3 m-2">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">
                Dropdown Card Example
              </h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body">
              Dropdown menus can be placed in the card header in order to extend
              the functionality of a basic card. In this dropdown card example,
              the Font Awesome vertical ellipsis icon in the card header can be
              clicked on in order to toggle a dropdown menu.
            </div>
          </div>
        </div>

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="js/sb-admin-2.min.js"></script>
      </Fragment>
    );
  }
}

export default NotesComponent;

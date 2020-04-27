import React, { Component, Fragment } from "react";

class CreateComponent extends Component {
  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 mt-3 text-gray-800">Create Notes</h1>
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
          <form class="col-lg-12">
            <div class="form-group">
              <label for="exampleFormControlInput1">Notes Title</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Notes Body</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default CreateComponent;

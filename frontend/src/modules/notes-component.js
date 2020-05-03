import React, { Component, Fragment } from "react";

const NotesComponent = (props) => {
  return (
    <Fragment>
        <div class="card shadow mb-4 col-lg-3 m-2">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">{props.data.title}</h6>
          </div>
          <div class="card-body">{props.data.note}</div>
        </div>
    </Fragment>
  );
};

export default NotesComponent;

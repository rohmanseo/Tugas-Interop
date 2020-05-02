import React, { Component, Fragment } from "react";
import "../assets/css/style.css";

const editPage = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.notes.title}</td>
        <td>{props.notes.body}</td>
        <td>
          <ul className="ulBtn">
            <li className="editBtn">
              <button class="btn btn-warning" type="submit">
                Edit
              </button>
              <button class="btn btn-danger" type="submit">
                Delete
              </button>
            </li>
          </ul>
        </td>
      </tr>
    </Fragment>
  );
};

export default editPage;

import React, { Component, Fragment } from "react";
import "../assets/css/style.css";

const editPage = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.data.title}</td>
        <td className="notesTable">{props.data.note}</td>
        <td>
          <ul className="ulBtn">
            <li className="editBtn">
              <button
                class="btn btn-warning"
                type="submit"
                onClick={() => props.update(props.data)}
              >
                Edit
              </button>
              <button
                class="btn btn-danger"
                type="submit"
                onClick={() => props.remove(props.data.id)}
              >
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

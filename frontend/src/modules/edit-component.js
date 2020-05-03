import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import "../assets/css/style.css";

const editPage = (props) => {

  function MyVerticallyCenteredModal(props) {
    return (
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Notes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="m-2 col-lg-12">
            <div class="form-group">
              <label for="exampleFormControlInput1">Notes Title</label>
              <input
                type="text"
                name="title"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Notes Body</label>
              <textarea
                class="form-control"
                name="note"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <button
            class="btn btn-primary float-right"
            // onClick={this.handleCreate}
            type="submit"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

  function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="warning" onClick={() => setModalShow(true)}>
          Edit
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  return (
    <Fragment>
      <tr>
        <td>{props.data.title}</td>
        <td className="notesTable">{props.data.note}</td>
        <td>
          <ul className="ulBtn">
            <li className="editBtn">
              <App/>
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

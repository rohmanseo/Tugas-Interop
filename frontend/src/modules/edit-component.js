import React, { Component, Fragment } from "react";
import { Modal, Button, ModalBody, Form } from "react-bootstrap";
import "../assets/css/style.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyModalBody {...props} data={props.data} />
      </Modal.Body>
    </Modal>
  );
}

class MyModalBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: this.props.data.title,
      noteBody: this.props.data.note,
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      noteTitle: event.target.value,
    });
  };

  handleBodyChange = (event) => {
    this.setState({
      noteBody: event.target.value,
    });
  };

  getAPI = () => {
    var token = cookies.get("access_token");
    axios
      .get("https://notes-management.herokuapp.com/api/note", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.setState({
          notes: res.data.data,
        });
      });
  };

  saveNote = (event) => {
    event.preventDefault();
    let noteId = this.props.data.id;
    var token = cookies.get("access_token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    var data = {
      title: this.state.noteTitle,
      note: this.state.noteBody,
    };

    axios.put("https://notes-management.herokuapp.com/api/note/" + noteId, data, config).then(
      (res) => {
        console.log(res);
        this.props.onHide();
      },
      (er) => {
        console.log("err : ", er.response);
      }
    );
  };

  render() {
    return (
      <>
        <Form onSubmit={this.saveNote}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleTitleChange}
              value={this.state.noteTitle}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Body</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleBodyChange}
              value={this.state.noteBody}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="light" onClick={this.props.onHide}>
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </>
    );
  }
}

function App(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit
      </Button>

      <MyVerticallyCenteredModal
        data={props.data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const editPage = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.data.title}</td>
        <td className="notesTable">{props.data.note}</td>
        <td>
          <ul className="ulBtn">
            <li className="editBtn">
              <App {...props} data={props.data} />
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

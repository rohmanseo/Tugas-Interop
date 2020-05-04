import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import "../assets/css/style.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

var myNotes ={
  id : "",
  title : "",
  note :""
}
var noteTitle = ""
var noteBody = ""


const editPage = (props) => {
  function MyVerticallyCenteredModal(props) {
    console.log(myNotes)

    function handleTitleChange(e){
      noteTitle = e.target.value
      console.log(noteTitle)
    }

    function handleBodyChange(e){
      noteBody = e.target.value
      console.log(noteBody)
    }

    function update(){
      var token = cookies.get('access_token');
        let config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
    
        var data = {
          title: noteTitle,
          note: noteBody
        };
        
      
        axios
          .put("https://notes-management.herokuapp.com/api/note/" + myNotes.id, data,config)
          .then(
            (res) => {
              console.log(res);
            },
            (er) => {
              console.log("err : ", er.response);
            }
          );
    }

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
                placeholder={myNotes.title}
                type="text"
                name="title"
                onChange={handleTitleChange}
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Notes Body</label>
              <textarea
                class="form-control"
                name="note"
                placeholder={myNotes.note}
                onChange={handleBodyChange}
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
            onClick={()=>{update()}}
            type="submit"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

  const ModalEdit = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return <></>;
  };

  function App(props) {
    const [modalShow, setModalShow] = React.useState(false);
    myNotes = props;
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
              <App {...props.data} />
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

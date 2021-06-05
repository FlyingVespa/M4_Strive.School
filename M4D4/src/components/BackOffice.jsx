import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "react-responsive-modal/styles.css";

class BackOffice extends Component {
  state = {
    openModal: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };
  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  render() {
    // const handleClose = () => this.setState({ show: false });
    // const handleShow = () => this.setState({ show: true });
    return (
      <>
        <button onClick={this.onClickButton}>Click Me</button>
        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onClose}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default BackOffice;

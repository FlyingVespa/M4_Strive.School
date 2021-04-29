import React from "react";
import { Col, Modal, Button, Container, Row, Form } from "react-bootstrap";

import CommentArea from "./CommentArea.jsx";
import AddComment from "./AddComment.jsx";

class SingleComment extends React.Component {
  state = {
    commentObject: {
      comment: "",
      rate: "",
      elementId: this.props.selected,
    },
    allComments: [],
  };

  receiveInput = (e) => {
    let id = e.currentSelect.id;
    this.setState({
      commentObject: {
        ...this.state.commentObject,
        [id]: e.currentTarget.value,
      },
    });
  };
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            <Row>
              <Col xs={6} md={9}>
                {this.props.title}
              </Col>
              <Col xs={6} md={3}>
                <img
                  style={{ borderRadius: "50%" }}
                  width="90"
                  height="90"
                  alt={this.props.title}
                  src={this.props.image}
                ></img>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h6>Add Comment :</h6>
                <Form onSubmit={this.postComment}>
                  <Form.Group>
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control
                      id="comment"
                      type="textarea"
                      rows={3}
                      placeholder="Write a comment..."
                      value={this.state.commentObject.comment}
                      onChange={this.receiveInput}
                    />
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control
                      type="number"
                      max={5}
                      min={1}
                      id="rate"
                      placeholder="Rate book"
                      value={this.state.commentObject.rate}
                      onChange={this.receiveInput}
                    />
                    <Form.Label>Id:</Form.Label>
                    <Form.Control
                      type="text"
                      id="elementId"
                      placeholder="Book ASIN"
                      value={this.props.selected}
                      // onChange={this.handleInput}
                      disabled
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Add Comment
                  </Button>
                </Form>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>
            <Row>
              {this.state.allComments.map((comment) => (
                <CommentArea
                  key={Math.ceil(Math.random() * 1000000)}
                  comment={comment.comment}
                />
              ))}
              {this.state.allComments.map((comment) => console.log(comment))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SingleComment;

import React from "react";
import { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class MyAlert extends Component {
  render() {
    return (
      <Container>
        <Alert variant="danger">
          <Alert.Heading>No books of this name available</Alert.Heading>
        </Alert>
      </Container>
    );
  }
}
export default MyAlert;

import { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class MyAlert extends Component {
  render() {
    return (
      <Container>
        <Alert variant="warning">
          <Alert.Heading>{this.text}</Alert.Heading>
        </Alert>
      </Container>
    );
  }
}

export default MyAlert;

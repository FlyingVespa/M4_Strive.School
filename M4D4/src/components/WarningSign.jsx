import { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class WarningSign extends Component {
  render() {
    return (
      <Container>
        <Alert variant="warning">
          <Alert.Heading>{this.props.text}</Alert.Heading>
        </Alert>
      </Container>
    );
  }
}

export default WarningSign;

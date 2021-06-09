import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComments extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    const urlComments = "https://striveschool-api.herokuapp.com/api/comments";
    const authCodeHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDAyNGNlYWY0ODAwMTVjOTE4NmYiLCJpYXQiOjE2MjIwMzM3OTIsImV4cCI6MTYyMzI0MzM5Mn0.N7an5gYm4hCXi-yxpt6ZfgszaM_66fkx3Ws0xd1zucc";

    e.preventDefault();
    try {
      let response = await fetch(urlComments, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-type": "application/json",
          Authorization: authCodeHedri,
        },
      });
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("you left your opinion!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComments;

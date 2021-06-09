import React, { Component } from "react";
import { Container, ListGroup, Card, Button } from "react-bootstrap";
import Loading from "../Loading.jsx";
import Error from "../Error.jsx";

export default class Comments extends Component {
  state = {
    // selectedBook: books[0],
    comments: [],
    isLoading: true,
    isError: false,
    id: this.props.id,
    comment: this.props.comment,
    rate: this.props.rate,
    elementId: this.props.elementId,
    author: this.props.author,
  };

  componentDidMount = async () => {
    const url =
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin;
    // let endpoint = id ? url + id : url;
    const bearerToken =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDAyNGNlYWY0ODAwMTVjOTE4NmYiLCJpYXQiOjE2MjIwMzM3OTIsImV4cCI6MTYyMzI0MzM5Mn0.N7an5gYm4hCXi-yxpt6ZfgszaM_66fkx3Ws0xd1zucc";
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: bearerToken,
    });

    console.log("comp did mount");

    try {
      let resp = await fetch(url, {
        method: "GET",
        headers,
      });

      let retrievedComments = await resp.json();
      this.setState({
        comments: retrievedComments,
        isLoading: false,
      });

      console.log("Comments Fetched:", retrievedComments);
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }

    // const deleteComment = async (asin) => {
    //   try {
    //     let response = await fetch(url + asin, {
    //       method: "DELETE",
    //       headers: {
    //         Authorization: bearerToken,
    //       },
    //     });
    //     if (response.ok) {
    //       alert("comment deleted!");
    //     } else {
    //       alert("comment NOT deleted!");
    //     }
    //   } catch (error) {
    //     alert("comment NOT deleted!");
    //   }
    // };
  };

  render() {
    const { id, comments, isLoading, isError } = this.state;
    console.log("Rendered");
    return (
      <>
        <Container>
          <h2>Comments</h2>
          {isLoading && <Loading />}
          {isError && <Error />}
          {comments.length === 0 ? (
            <p> No one has a opionon on this book as of yet </p>
          ) : (
            <Card>
              <ListGroup variant="flush">
                {comments.map((com) => (
                  <ListGroup.Item key={id}>
                    {`Comment: ${com.comment} + Rating: ${com.rate} + Author: ${com.author}`}{" "}
                    <Button
                      variant="danger"
                      className="ml-2"
                      onClick={() => deleteComment(com._id)}
                    >
                      D
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          )}
        </Container>
      </>
    );
  }
}

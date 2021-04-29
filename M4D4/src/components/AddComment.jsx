import React from "react";

class AddComment extends React.Component {
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

  retrieveComments = async (id) => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWI3NmIxZjBmYjAwMTVkOTE3OGQiLCJpYXQiOjE2MTkwMDgzNzQsImV4cCI6MTYyMDIxNzk3NH0.r1vvnZlH1xQehALnzQFe9IdtecDk_2GoyQKGc9tiYgA",
          },
        }
      );
      const json = await resp.json();
      this.setState({ allComments: json });
    } catch (err) {
      console.log(err);
    }
  };

  AddComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            ...this.state.commentObject,
            elementId: this.props.selected,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWI3NmIxZjBmYjAwMTVkOTE3OGQiLCJpYXQiOjE2MTkwMDgzNzQsImV4cCI6MTYyMDIxNzk3NH0.r1vvnZlH1xQehALnzQFe9IdtecDk_2GoyQKGc9tiYgA",
          },
        }
      );

      if (response.ok) {
        console.log("Added Comment Successfully");
      } else {
        console.log("Error - Could not add Comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    await this.fetchComments(this.props.selected);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.selected !== this.props.selected) {
      await this.fetchComments(this.props.selected);
    }
  };
}

export default AddComment;

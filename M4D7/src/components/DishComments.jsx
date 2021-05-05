import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const DishComments = (props) => {
  props.dish;
  const [comments, setDishCommentDisplay] = useState(props.c.comment);

  const dishCommentDisplayHandler = () => {
    setDishCommentDisplay(" ");
    console.log("dishCommentDisplay");
  };

  return (
    <div className={`mt-${props.marginTop}`}>
      <h2>Comments for {props.dish.name}</h2>
      <ListGroup>
        {props.dish.name === "Amatriciana"
          ? this.setDishCommentDisplay("false")
          : this.setDishCommentDisplay("true")}{" "}
        &&
        {props.dish.comments.map((c) => (
          <ListGroup.Item key={c.id}>
            {c.comment.length < 1
              ? c.comment + "No reliable reviews available"
              : c.comment + " from " + c.author}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default DishComments;

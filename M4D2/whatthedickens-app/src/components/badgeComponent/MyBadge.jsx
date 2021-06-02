import React from "react";
import { Badge } from "react-bootstrap";

function MyBadge({ category }) {
  let color;
  let font;
  switch (category) {
    case "fantasy":
      color = "#748CAB";
      break;
    case "horror":
      color = "#7F5A83";
      break;
    case "scifi":
      color = "#507E67";
      break;
    case "romance":
      color = "#9F2042";
      break;
    case "history":
      font = "black";
      color = "#edd3c4";
      break;
  }

  return (
    <Badge
      style={{
        backgroundColor: `${color}`,
        color: `${font}`,
      }}
      className="mt-1"
    >
      {category}
    </Badge>
  );
}

export default MyBadge;

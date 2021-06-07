import { Badge } from "react-bootstrap";

const MyBadge = ({ category }) => {
  let fontColor;
  let bgColor;

  switch (category) {
    case "fantasy":
      bgColor = "#748CAB";
      break;
    case "horror":
      bgColor = "#7F5A83";
      break;
    case "scifi":
      bgColor = "#507E67";
      break;
    case "romance":
      bgColor = "#9F2042";
      break;
    case "history":
      bgColor = "#edd3c4";
      fontColor = "black";
      break;
    default:
      bgColor = "white";
      break;
  }

  return (
    <Badge style={{ color: `${fontColor}`, backgroundColor: `${bgColor}` }}>
      {category}
    </Badge>
  );
};
export default MyBadge;

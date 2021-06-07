import { ListGroup } from "react-bootstrap";
import SingleComment from "../singleBookComponent/SingleBook";

export default CommentList = ({ commentstoshow }) => {
  <ListGroup>
    {commentstoshow.map((com) => (
      <SingleComment com={com} />
    ))}
  </ListGroup>;
};

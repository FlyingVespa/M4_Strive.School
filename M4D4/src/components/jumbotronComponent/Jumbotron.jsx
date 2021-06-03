import { Jumbotron } from "react-bootstrap";
import "./jumbotron.css";
import FilterBookList from "../FilterBooksList.jsx";

const MyJumbotron = () => {
  return (
    <Jumbotron>
      <h1>Ready for your next adventure?</h1>
      <p>Have a look at the folowing books for inspiration.</p>
      <FilterBookList />
    </Jumbotron>
  );
};
export default MyJumbotron;

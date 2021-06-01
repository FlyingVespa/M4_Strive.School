import { Jumbotron, InputGroup, FormControl, Image } from "react-bootstrap";
import "./jumbotron.css";
import bookshelf from "../../assets/img/bookshelf.png";
const MyJumbotron = () => {
  return (
    <Jumbotron>
      <h1>Ready for your next adventure?</h1>
      <p>Have a look at the folowing books for inspiration.</p>
      {/* <InputGroup>
        <FormControl
          placeholder="Search Books by Title"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            this.handleSearchQuery(e.target.value);
          }}
        />
      </InputGroup> */}
    </Jumbotron>
  );
};
export default MyJumbotron;

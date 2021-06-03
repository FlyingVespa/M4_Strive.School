import { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class FilterBooksList extends Component {
  state = {
    query: "",
  };
  InputChange = (e) => {
    console.log(e);
    this.setState({ query: e.target.value });
    this.props.passQuery(e.target.value);
  };
  render() {
    return (
      <InputGroup>
        <FormControl
          placeholder="Search Books by Title"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            this.handleSearchQuery(e.target.value);
          }}
        />
      </InputGroup>
      // <div>
      //     <input type="text" onChange={this.InputChange}/>
      // </div>
    );
  }
}

export default FilterBooksList;

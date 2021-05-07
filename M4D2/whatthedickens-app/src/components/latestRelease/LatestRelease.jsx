import {Component} from "react";
import { Container, Row,  } from "react-bootstrap";
import SingleBook from "../singleBookComponent/SingleBook";

import Scifi from "../json/scifi.json";

class LatestRelease extends Component {

  state = {
    featuredBooks: Scifi,
  };
  render()
  return {
  
         <Row className="m-2 no-gutters">
          {this.featuredBooks.map((book) => (
            <SingleBook
              title={book.title}
              img={book.img}
              key={book.asin}
              category={book.category}
              price={book.price}
            />
          ))}
        </Row>
    

          }
};

export default LatestRelease;

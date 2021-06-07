import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

//Componets
import LatestRelease from "./components/latestRelease/LatestRelease.jsx";
import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/headerComponent/Nav.jsx";
import MyFooter from "./components/footerComponent/Footer.jsx";
import Comments from "./components/CommentComponent/Comments.jsx";
import WarningSign from "./components/WarningSign";
import book from "./assets/img/book.jpg";
import { Component } from "react";
// import SingleBook from "./components/singleBookComponent/SingleBook.jsx";

const imageStyle = {
  height: "600px",
  posistion: "sticky",
  right: -30,
  bottom: 50,
  left: "auto",
};

// const hideModal = () => {
//   this.setState({ show: false });
// };

class App extends Component {
  // state = {
  //   allmybooks: null,
  //   isLoading: true,
  //   isError: false,
  // };

  render() {
    return (
      <div className="App">
        <MyNavbar imgSource="/dickenslogo.png" title="What The Dickens" />
        {/* <Comments /> */}
        {/* <WarningSign text="Oh Dickens, where art thou?" /> */}
        {/* <Image
          className="bgBook"
          src={book}
          alt="book"
          style={imageStyle}
        ></Image> */}
        {/* <LatestRelease /> */}
        {/* {this.state.allmybooks.length ? (
          <h4> No Comments yet </h4>
        ) : ( */}
        {/* {allmybooks &&
          allmybooks.map((book) => {
            <SingleBook
              title={book.title}
              key={book.asin}
              price={book.price}
            />;
          })} */}
        <BookList />
        <MyFooter />
      </div>
    );
  }
}
export default App;

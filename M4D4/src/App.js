import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

//Componets
import LatestRelease from "./components/latestRelease/LatestRelease.jsx";
import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/headerComponent/Nav.jsx";
import MyFooter from "./components/footerComponent/Footer.jsx";
import Comments from "./components/CommentComponent/Comments.jsx";
import book from "./assets/img/book.jpg";

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

const App = () => {
  return (
    <div className="App">
      <MyNavbar imgSource="/dickenslogo.png" title="What The Dickens" />
      <Comments />

      <Image
        className="bgBook"
        src={book}
        alt="book"
        style={imageStyle}
      ></Image>
      {/* <LatestRelease /> */}
      <BookList />
      <MyFooter />
    </div>
  );
};

export default App;

import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

//Componets
import LatestRelease from "./components/latestRelease/LatestRelease.jsx";
import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/headerComponent/Nav.jsx";
import MyFooter from "./components/footerComponent/Footer.jsx";
import MyJumbotron from "./components/jumbotronComponent/Jumbotron.jsx";
// import FilterBookList from "./components/FilterbookList.jsx";
// import WarningSign from "./components/WarningSign.jsx";
import book from "./assets/img/book.jpg";

const imageStyle = {
  height: "600px",
  posistion: "sticky",
  right: -30,
  bottom: 50,
  left: "auto",
};

const App = () => {
  return (
    <div className="App">
      <MyNavbar imgSource="/dickenslogo.png" title="What The Dickens" />
      <MyJumbotron />
      <Image
        className="bgBook"
        src={book}
        alt="book"
        style={imageStyle}
      ></Image>
      <LatestRelease />
      <BookList />
      {/* <WarningSign text="Oh Dickens, where art thou?" /> */}
      <MyFooter />
    </div>
  );
};

export default App;

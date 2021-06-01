import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Componets
import LatestRelease from "./components/latestRelease/LatestRelease.jsx";
import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/headerComponent/Nav.jsx";
import MyFooter from "./components/footerComponent/Footer.jsx";
import MyJumbotron from "./components/jumbotronComponent/Jumbotron.jsx";
// import FilterBookList from "./components/FilterbookList.jsx";
import WarningSign from "./components/WarningSign.jsx";

const App = () => {
  return (
    <div className="App">
      <MyNavbar title="What The Dickens" />
      <MyJumbotron />
      <LatestRelease />
      <BookList />
      <WarningSign text="Oh Dickens, where art thou?" />
      <MyFooter />
    </div>
  );
};

export default App;

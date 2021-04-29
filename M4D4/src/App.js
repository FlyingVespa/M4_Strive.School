import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/Nav.jsx";
import MyFooter from "./components/Footer";
import MyJumbotron from "./components/Jumbotron.jsx";
import WarningSign from "./components/WarningSign.jsx";

const App = () => {
  return (
    <div className="App">
      <MyNavbar title="What The Dickens" />
      <MyJumbotron />

      {/* <FilterBookList /> */}
      <BookList />
      <WarningSign />
      <MyFooter />
    </div>
  );
};

export default App;

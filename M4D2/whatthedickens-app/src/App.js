import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Componets
import BookList from "./components/BookList.jsx";
import MyNavbar from "./components/Nav.jsx";
import Desc from "./components/Desc.jsx";
import MyFooter from "./components/Footer";
import MyJumbotron from "./components/Jumbotron.jsx";
import SearchBook from "./components/SearchBook.jsx";

const App = () => {
  return (
    <div className="App">
      <MyNavbar title="What The Dickens" />
      <MyJumbotron />
      <SearchBook />
      <BookList />
      <Desc />
      <MyFooter />
    </div>
  );
};

export default App;

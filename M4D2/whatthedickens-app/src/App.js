import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Componets
import Home from "./components/Home.jsx";
import MyNavbar from "./components/Nav.jsx";
import Desc from "./components/Desc.jsx";

const App = () => {
  return (
    <div className="App">
      <MyNavbar title="What The Dickens" />
      <Home />
      <Desc />
    </div>
  );
};

export default App;

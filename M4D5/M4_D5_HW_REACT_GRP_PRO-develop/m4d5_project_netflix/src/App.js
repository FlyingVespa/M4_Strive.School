import "./App.css";
// import BackOffice from "./component/BackOffice";
import CarouselOfMovies from "./component/CarouselOfMovies.jsx";
import Search from "./component/SearchComponent/Search.jsx";
import MyNav from "./component/Navbar/MyNav.jsx";
import MyFooter from "./component/Footer/MyFooter.jsx";
// tashed changes

function App() {
  return (
    <div className="App">
      <MyNav />

      {/* add the book id to this */}
      {/* <BackOffice id="1621579832" /> */}

      <Search />
      <CarouselOfMovies search={"Harry Potter"} />
      <CarouselOfMovies search={"The Lord of the Rings"} />
      <CarouselOfMovies search={"Mummy"} />
      <MyFooter />
    </div>
  );
}

export default App;

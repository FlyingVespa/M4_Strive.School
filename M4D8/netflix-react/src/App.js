import "./App.css";
import MyCarousel from "./components/carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadMovies from "./components/Search/LoadMovies";
import MyNav from "./components/Navbar/MyNav.jsx";
import MyFooter from "./components/Footer/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <LoadMovies genre="comedy" />
      <LoadMovies genre="romance" />
      <MyFooter />
    </div>
  );
}

export default App;

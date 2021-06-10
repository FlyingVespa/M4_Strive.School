import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/Navbar/MyNav.jsx";
import MyFooter from "./components/Footer/MyFooter.jsx";
import ShowDetails from "./components/showDetails/ShowDetails.jsx";
// import { Carousel } from "bootstrap";
import Carousel from "./components/carousel/Carousel.jsx";
import Details from "./components/showDetails/Details";
import Search from "./components/SearchComponent/Search.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      {/* <Details /> */}
      {/* <ShowDetails /> */}
      {/* <Registration /> */}
      <MyNav />

      {/* <Carousel /> */}
      <Router>
        {/* <Route component={ShowDetails} path="/details/:check" /> */}
        <Link to="/details/123">Go to details page</Link>
        {/* <Route
            render={(routerProps) => (
              <Details
                selectedMovie={this.state.selectedMovie}
                {...routerProps}
              />
            )}
            path="/Details/:id" */}
        <Route exact path="/" component={Search} />
        {/* /> */}
        <Route exact path="/" component={Carousel} />
        <Route path="/registration" component={Registration} />
        <Route path="/showdetails/:movieID" component={ShowDetails} />

        <MyFooter />
      </Router>
    </div>
  );
}

export default App;

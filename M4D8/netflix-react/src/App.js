import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadMovies from "./components/Search/LoadMovies";
import MyNav from "./components/Navbar/MyNav.jsx";
import MyFooter from "./components/Footer/MyFooter.jsx";
import ShowDetails from "./components/showDetails/ShowDetails.jsx";
import { BrowserRouter as Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Route
        render={(routerProps) => <LoadMovies genre="comedy" {...routerProps} />}
        path="/"
        exact
      />
      <Route
        render={(routerProps) => (
          <LoadMovies genre="romance" {...routerProps} />
        )}
        path="/"
        exact
      />
      <Route component={ShowDetails} path="/details/:check" />
      <MyFooter />
    </div>
  );
}

export default App;

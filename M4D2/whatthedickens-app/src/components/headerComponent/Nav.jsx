import { Navbar, Nav } from "react-bootstrap";
import dickenslogo from "../../assets/img/dickenslogo.png";

import "./Nav.css";

const MyNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img alt="logo" src={dickenslogo} width="30" height="30" />{" "}
        {props.title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

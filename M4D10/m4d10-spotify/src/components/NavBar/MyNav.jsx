import React from "react";
import { Container, Col, Navbar, Nav, Link, Listed } from "react-bootstrap";
import "./MyNav.css";

class MyNav extends React.Component {
  render() {
    return (
      <Container>
        <Col>
          <Nav id="sideNav">
            <Nav.Link
              id="navLink"
              href="https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
            >
              <img
                src="assets\images\icons\spotify-sidebar-logo.png"
                class="sidebar-logo"
              />
              Home
            </Nav.Link>
            <Nav.Link
              id="navLink"
              href="HomePage.html"
              class="greenborder homeGreen"
            >
              <img
                class="sidebarIcon"
                src="assets\images\icons\sidebar-home.png"
              />
              Search
            </Nav.Link>
            <Nav.Link
              id="navLink"
              href="search.html"
              class="greenborder searchGreen"
            >
              <img
                class="sidebarIcon"
                src="assets\images\icons\sidebar-search.png"
              />
              Search
            </Nav.Link>
            <Nav.Link
              id="navLink"
              type="button"
              class="btn btn-secondary loginBtn text-dark"
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              id="navLink"
              type="button"
              href="index.html"
              class="btn btn-dark loginBtn"
            >
              Login
            </Nav.Link>
            <Nav.Link class="cookies p-0">Cookies | Privacy</Nav.Link>
          </Nav>
        </Col>
      </Container>
    );
  }
}
export default MyNav;
// <!DOCTYPE html>
// <html lang="en">

// <body>
//   <!-- Side navigation -->

//   <!--  Bottom controls -->
//   <div class="footer fixed-bottom">
//     <div class="smallnav">
//       <hr />
//       <div class="smallnavicon">
//         <a href="HomePage.html" class="smallnavicon"><img class="sidebarIcon"
//             src="assets\images\icons\sidebar-home.png" />
//           Home</a>
//       </div>
//       <div class="smallnavicon">
//         <a href="search.html" class="smallnavicon"><img class="sidebarIcon"
//             src="assets\images\icons\sidebar-search.png" />
//           Search</a>
//       </div>
//       <div class="smallnavicon">
//         <a href="test.html" class="smallnavicon"><img class="sidebarIcon"
//             src="assets\images\icons\sidebar-library.png" />
//           Library</a>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col-2 col-md-2 bottomLeft">
//         <a href="albumpage.html"><img src="./assets/images/album-images/hey-jude.jpg" class="currentalbumart" alt="Album" style="margin-right: 5px" /></a>
//         <div class="d-inline p-1 songartist">
//           <h6 class="text-white">Help!</h6>
//           Beatles
//         </div>
//         <span class="fa-stack d-none d-md-block hideicon bottomIcon" id="toggle">
//           <i class="far fa-heart fa-stack-1x"></i>
//           <i class="fas fa-heart fa-stack-1x"></i>
//         </span>
//         <a href="#"><img class="bottomIcon d-none d-md-block hideicon"
//             src="assets\images\icons\icons8-toggle-full-screen-96.png" /></a>
//       </div>
//       <div class="col-9 col-md-9">
//         <div class="bottomMiddle">
//           <a href="#"><img src="assets\images\icons\icons8-shuffle-24.png" alt="Shuffle"
//               class="bottomIcon shuffleicon d-none d-md-block" /></a><a href="test.html"><img
//               src="assets\images\icons\icons8-rewind-52.png" alt="Rewind" class="bottomIcon" /></a>
//             <!-- <div alt="Play Button" onmouseover="rick.play()" class="playbutton text-white"><i
//               class="fas fa-play-circle playhover mx-0"></i> -->
//         </div><a href="#"><img src="assets\images\icons\icons8-fast-forward-52.png" alt="Forward"
//             class="bottomIcon" style="margin-left: 0px; padding-left: 0px; left: 0px; margin-left: 10px;" /></a><a href="test.html"><img src="assets\images\icons\icons8-repeat-60.png"
//             alt="Repeat" class="bottomIcon d-none d-md-block"/></a><br>
//       </div>
//       <div class="row bottomMiddle">
//         <div class="col-1 songtime py-1 " style="text-align:right;">00:00</div>
//         <div class="col-8">
//           <div class="progress mx-0" style="height: 5px">
//             <div class="progress-bar bg-success mx-0" role="progressbar" aria-valuenow="25" aria-valuemin="0"
//               aria-valuemax="100">
//               <p>FILL UP tHE BAR</p>
//             </div>
//           </div>
//         </div>
//         <div class="col-1 p-0 py-1 songtime">4:20</div>
//       </div>
//     </div>
//     <div class="col-1 bottomRight">
//       <a href="#"><img src="assets\images\icons\icons8-playlist-32.png" alt=""
//           class="bottomIcon d-none d-md-block hideicon" /></a>
//       <a href="#"><img src="assets\images\icons\icons8-subwoofer-48.png" alt=""
//           class="bottomIcon d-none d-md-block hideicon" /> </a><a href=""><img
//           src="assets\images\icons\icons8-speaker-48.png" alt="" class="d-none d-md-block bottomIcon" /></a>
//       <input type="range" class="form-control-range slidernav d-md-block" style="width: 100px" />
//     </div>
//   </div>
//   </div>

//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//     integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//     crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
//     crossorigin="anonymous"></script>
//   <script src="script.js"></script>
// </body>

// </html>

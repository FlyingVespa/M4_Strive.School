import React from "react";
import "../assets/css/footer.css";
import Insta from "../assets/img/insta.png";
import Github from "../assets/img/github.png";
import Linkd from "../assets/img/linkedin.png";

const MyFooter = () => {
  return (
    <footer>
      <div className="footer">
        <a href="https://www.linkedin.com/in/hedrinel/">
          <img className="icon" src={Insta} alt="" />
        </a>
        <a href="https://https://github.com/FlyingVespa/bookhunterapp">
          <img className="icon" src={Github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/hedrinel/">
          <img className="icon" src={Linkd} alt="" />
        </a>
        <p>Helena Nel &copy;{new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default MyFooter;

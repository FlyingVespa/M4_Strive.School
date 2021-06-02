import "./footer.css";
import Insta from "../../assets/img/insta.png";
import Github from "../../assets/img/github.png";
import Linkd from "../../assets/img/linkedin.png";

import { Image } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <div className="footer">
        <a href="https://www.linkedin.com/in/hedrinel/">
          <Image className="icon" src={Insta} alt="" roundedCircle />
        </a>
        <a href="https://https://github.com/FlyingVespa/bookhunterapp">
          <Image className="icon" src={Github} alt="" roundedCircle />
        </a>
        <a href="https://www.linkedin.com/in/hedrinel/">
          <Image className="icon" src={Linkd} alt="" roundedCircle />
        </a>
        <p>Helena Nel &copy;{new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default MyFooter;

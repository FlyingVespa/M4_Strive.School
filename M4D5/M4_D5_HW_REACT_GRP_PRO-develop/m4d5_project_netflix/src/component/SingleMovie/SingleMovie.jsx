import { Image } from "react-bootstrap";

const SingleMovie = (props) => {
  return (
    <div>
      <Image src={props.img} alt={props.imdbID}></Image>
    </div>
  );
};

export default SingleMovie;

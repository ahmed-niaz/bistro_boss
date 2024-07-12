import { Link } from "react-router-dom";
import google from "../../assets/login/google.png";

const Google = () => {
  return (
    <Link className="flex items-center justify-center">
      <img src={google} alt={google} />
    </Link>
  );
};

export default Google;

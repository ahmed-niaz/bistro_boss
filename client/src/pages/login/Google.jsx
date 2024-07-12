import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/login/google.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Google = () => {
  const {googleLogin} = useAuth();
  const navigate = useNavigate()

  const handleGoogleLogin = () =>{
    googleLogin().then((result) =>{
      console.log(result.user);
      toast.success("Register successful");
      navigate('/')
    })
  }
  return (
    <Link onClick={handleGoogleLogin} className="flex items-center justify-center">
      <img src={google} alt={google} />
    </Link>
  );
};

export default Google;

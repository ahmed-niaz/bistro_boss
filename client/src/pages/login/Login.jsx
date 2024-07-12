import left_side_bg from "../../assets/login/left_sided_bg.png";
import { Link } from "react-router-dom";
import Google from "./Google";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  // load captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    const userData = {
      email,
      password,
      captcha,
    };
    console.log(userData);
  };

  // validate captcha

  const validation = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      toast.success("Captcha Matched");
      setDisabled(false);
    } else {
      toast.error("Captcha Does Not Match");
      setDisabled(true);
    }
  };
  return (
    <main className="font-inter bg-login-bg min-h-screen flex items-center justify-center">
      <div className="w-10/12 mx-auto shadow-2xl flex bg-login-bg flex-col lg:flex-row">
        <div className="basis-1/2">
          <img className=" p-16" src={left_side_bg} alt={left_side_bg} />
        </div>
        <div className="basis-1/2 flex flex-col p-4  justify-center items-center">
          <p className="font-cinzel uppercase text-2xl font-extrabold text-[#835D23]">
            Login
          </p>
          {/* form */}
          <form className="card-body w-3/4 space-y-2" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              {/* for captcha */}
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type captcha"
                className="input input-bordered"
              />
              <button
                onClick={validation}
                className="text-[#835D23] font-cinzel font-extrabold text-sm p-2 w-full "
              >
                validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn glass bg-[#835D23] rounded-none text-white hover:bg-[#835D21] w-full"
              >
                Login
              </button>
            </div>
            <small className="text-center text-[#835D23] font-bold ">
              New here?
              <Link to="/register" className="font-cinzel text-lg">
                Create a new account
              </Link>
            </small>
            <small className="text-center font-cinzel font-bold">
              or sign in with
            </small>
            <div className="text-center">
              <Google />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;

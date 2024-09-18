import { useEffect, useState } from "react";
import bgImage from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authImage from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

function Login() {
  const bgimage = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !email
          ? "Please enter a valid email address!"
          : "Please enter a valid password!",
      });
      return;
    }

    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            title: "User Login Successful.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          navigate(from, { replace: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid email or password. Please try again!",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            error.message || "An unexpected error occurred. Please try again.",
        });
      });
  };

  const handleValidCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Log in</title>
      </Helmet>
      <div className="relative min-h-screen flex items-center justify-center">
        <div
          style={bgimage}
          className="absolute top-0 left-0 w-full h-full"
        ></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center lg:gap-16 gap-8 px-4">
          <img
            src={authImage}
            alt="Authentication"
            className="w-full max-w-xs lg:max-w-sm"
          />
          <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-3xl lg:text-4xl font-semibold text-center py-4">
              Log In
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center input input-bordered w-full">
                  <input
                    type={changePassword ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="w-full outline-none"
                    required
                  />
                  <span
                    className="cursor-pointer pl-2"
                    onClick={() => {
                      setChangePassword(changeIcon);
                    }}
                  >
                    {changeIcon ? <FaEyeSlash /> : <IoEyeSharp />}
                  </span>
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha above here."
                  className="input input-bordered w-full"
                  // required
                  // TODO:required uncomment
                />
              </div>

              <label className="label mt-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {/* todo disabled make right down instant of false value */}
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-primary w-full"
                  value="Login"
                  type="submit"
                />
              </div>
            </form>

            <p className="text-center py-4 text-[#D1A054]">
              <small>
                New here?
                <Link to="/signup"> Create a New Account</Link>
              </small>
            </p>
            <div className="text-center">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import { useEffect, useState } from "react";
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
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const [disabled, setDisabled] = useState(true);
  // TODO: find disable
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
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
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 w-full max-w-4xl mx-auto lg:px-4 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-center px-4">
          <img
            src={authImage}
            alt="Authentication"
            className="hidden lg:block w-full max-w-xs lg:max-w-sm"
          />
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">
              Log In
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full py-2 px-4 rounded-md text-sm border-gray-300 focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="form-control relative">
                <input
                  type={changePassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full py-2 px-4 rounded-md text-sm border-gray-300 focus:border-primary focus:ring-primary"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => {
                    setChangePassword(changeIcon);
                  }}
                >
                  {changeIcon ? <FaEyeSlash /> : <IoEyeSharp />}
                </span>
              </div>

              <div className="form-control mb-4">
                <label className="text-xs mb-1 text-gray-500">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha here"
                  className="input input-bordered w-full py-2 px-4 rounded-md text-sm border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="form-control">
                <input
                // disable
                  disabled={false}
                  className="btn bg-[#D1A054] w-full rounded-md"
                  value="Login"
                  type="submit"
                />
              </div>
            </form>

            <p className="text-center text-sm text-gray-500">
              <small>
                New here?{" "}
                <Link to="/signup" className="text-[#D1A054] hover:underline">
                  Create a New Account
                </Link>
              </small>
            </p>

            <div className="text-center mt-6">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

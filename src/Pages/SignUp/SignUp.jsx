import { Link, useNavigate } from "react-router-dom";
import authImage from "../../assets/others/authentication2.png";
import bgImage from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function SignUp() {
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const { createUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const result = await createUser(data.email, data.password);
  //     const loggedUser = result.user;
  //     console.log(loggedUser);

  //     await updateUserProfile(data.name, data.photoURL);

  //     const saveUser = { name: data.name, email: data.email };

  //     const response = await axiosSecure.post("/users", saveUser);
  //     console.log(response.data);

  //     const responseData = await response.data;
  //     if (responseData.insertedId) {
  //       reset();
  //       Swal.fire({
  //         icon: "success",
  //         title: "Sign up successfully",
  //         showConfirmButton: false,
  //         timer: 500,
  //       });
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: `${error.message || error}`,
  //     });
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      await createUser(data.email, data.password);
      await updateUserProfile(data.name, data.photoURL);
      const saveUser = { name: data.name, email: data.email };
      const response = await axiosSecure.post("/users", saveUser);
      // Check if the user was saved successfully
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Sign up successfully",
          showConfirmButton: false,
          timer: 500,
        });
        navigate("/login");
      } else {
        throw new Error("User not saved");
      }
    } catch (error) {
      // Handle error display
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message || "An unexpected error occurred"}`,
      });
    }
  };

  const bgimage = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div
        style={bgimage}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto py-16 lg:py-24 flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-16 gap-8 px-4">
        <img
          src={authImage}
          alt="Authentication"
          className="w-full max-w-xs lg:max-w-sm"
        />
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center py-4">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo URL</span>
              </label>
              <input
                placeholder="Photo url"
                {...register("photoURL", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.photoURL && (
                <span className="text-red-700">Photo URL is required</span>
              )}
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center input input-bordered w-full">
                <input
                  type={changePassword ? "password" : "text"}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="w-full outline-none"
                  required
                />
                <span
                  className="cursor-pointer pl-2"
                  onClick={() => setChangePassword(changeIcon)}
                >
                  {changeIcon ? <FaEyeSlash /> : <IoEyeSharp />}
                </span>
              </div>
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-700">
                  Password must be less than 20 characters
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-[#D1A054] hover:bg-[#d19f54dc] w-full"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className="text-center py-4 text-[#D1A054]">
            <small>
              Already registered?
              <Link to="/login"> Go to log in</Link>
            </small>
          </p>
          <div className="text-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

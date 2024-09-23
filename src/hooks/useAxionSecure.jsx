import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Create axios instance with baseURL
  const axiosSecureInstance = axios.create({
    baseURL: "http://localhost:5000", // Adjust the base URL as needed
  });

  useEffect(() => {
    // Request interceptor to inject the Authorization header
    const requestInterceptor = axiosSecureInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("accsess-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle 401 and 403 status codes
    const responseInterceptor = axiosSecureInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut(); // Call the logOut method asynchronously
          navigate("/login"); // Redirect to the login page
        }
        return Promise.reject(error);
      }
    );

    // Cleanup the interceptors when the component is unmounted
    return () => {
      axiosSecureInstance.interceptors.request.eject(requestInterceptor);
      axiosSecureInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate, axiosSecureInstance]);

  return [axiosSecureInstance];
};

export default useAxiosSecure;

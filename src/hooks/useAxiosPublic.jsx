import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-ptbe4md5u-hosain-alis-projects.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

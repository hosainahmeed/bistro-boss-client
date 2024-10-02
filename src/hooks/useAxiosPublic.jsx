import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-gi3ojugi1-hosain-alis-projects.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

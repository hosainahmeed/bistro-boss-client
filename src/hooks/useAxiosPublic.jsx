import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-o8a62qy2q-hosain-alis-projects.vercel.app/api",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

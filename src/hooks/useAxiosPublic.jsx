import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-5gncpmc8s-hosain-alis-projects.vercel.app/menu",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

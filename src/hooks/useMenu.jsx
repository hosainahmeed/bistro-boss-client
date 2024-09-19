import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic =  useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   axiosSecure.get("/menu")
  //     .then((res) => {
  //       setLoading(false);
  //       setMenu(res.data);
  //     });
  // }, []);

  const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'], 
    queryFn: async() =>{
        const res = await axiosPublic.get('/menu');
        return res.data;
    }
})

  return [menu, loading,refetch];
};

export default useMenu;

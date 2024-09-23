import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

function MenuCard() {
  const [offered, setOffered] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/menu").then((res) => {
      const offeredItem = res.data.filter(
        (items) => items.category === "offered"
      );
      setOffered(offeredItem);
    });
  }, [axiosPublic]);

  return (
    <div className="px-2 overflow-x-hidden flex items-center justify-center flex-col">
      <SectionTitle
        subheading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-12">
        {offered.map((items) => (
          <Card key={items._id} items={items} />
        ))}
      </div>
    </div>
  );
}

export default MenuCard;

import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

function MenuCard() {
  const [offered, setOffered] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offeredItem = data.filter(
          (items) => items.category === "offered"
        );
        setOffered(offeredItem);
      });
  }, []);

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

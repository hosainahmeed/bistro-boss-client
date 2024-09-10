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
    <div>
      <SectionTitle
        subheading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {offered.map((items) => (
          <Card key={items._id} items={items} />
        ))}
      </div>
    </div>
  );
}

export default MenuCard;

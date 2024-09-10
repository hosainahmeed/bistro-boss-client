import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";
import ContactNumber from "../../../Components/ContactNumber/ContactNumber";

function PopulorMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populorItem = data.filter((item) => item.category === "popular");
        setMenu(populorItem);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-2">
      <SectionTitle subheading="Check it out" heading="FROM OUR MENU" />

      <div className="space-y-8 grid md:grid-cols-2 gap-4">
        {menu.map((items) => (
          <MenuItem key={items._id} items={items}></MenuItem>
        ))}
      </div>
      <button className="border p-2 mt-12">vew menu</button>
      <ContactNumber/>
    </div>
  );
}

export default PopulorMenu;

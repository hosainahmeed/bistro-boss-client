import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";
import ContactNumber from "../../../Components/ContactNumber/ContactNumber";
import AddToCart from "../../../Components/Buttons/AddtoCart/AddToCart";
import useMenu from "../../../hooks/useMenu";

function PopulorMenu({ hidden }) {
  const [menu] = useMenu();

  const populorItem = menu.filter((item) => item.category === "popular");

  return (
    <>
      <div className="max-w-screen-xl mx-auto my-12 px-2 flex flex-col items-center gap-12">
        <SectionTitle
          hidden={hidden}
          subheading="Check it out"
          heading="FROM OUR MENU"
        />

        <div className="space-y-8 grid md:grid-cols-2 gap-4">
          {populorItem.map((items) => (
            <MenuItem key={items._id} items={items}></MenuItem>
          ))}
        </div>
        <AddToCart
          bgColor="white"
          textColor="black"
          btntext="View Full  Menu"
          borderBottom="black"
        ></AddToCart>
      </div>
      <ContactNumber hidden={hidden} />
    </>
  );
}

export default PopulorMenu;

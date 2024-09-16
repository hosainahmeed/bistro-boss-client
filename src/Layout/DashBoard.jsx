import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import useCart from "../hooks/useCart";

function DashBoard() {

  const [cart] = useCart();

  
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start md:mt-16">
          {/* Page content here */}
          <div className="">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <CiMenuFries></CiMenuFries>
            </label>
          </div>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#D1A054] text-base-content min-h-full w-80 p-4 uppercase font-cinzel">
            <h1 className="font-black text-xl md:text-4xl">BISTRO BOSS</h1>
            <h1 className="text-xl md:text-4xl mb-4">Restaurant</h1>
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/userhome">
                <FaShoppingCart />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <BsJournalBookmarkFill />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <GiWallet />
                Payment history
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaCartShopping />
                My cart <div className="badge">+{cart?.length}</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reviews">
                <MdRateReview />
                Add review
              </NavLink>
            </li>
            <div className="w-full h-[1px] bg-white"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <MdOutlineRestaurantMenu></MdOutlineRestaurantMenu> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBag></FaShoppingBag> Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <MdContactMail></MdContactMail> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

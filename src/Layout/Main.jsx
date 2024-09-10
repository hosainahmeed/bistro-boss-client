import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Main;

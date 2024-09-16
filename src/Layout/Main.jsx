import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";

function Main() {
  const locationPath = useLocation();
  const visualHeaderFooter =
    locationPath.pathname.includes("login") ||
    locationPath.pathname.includes("signup");
  return (
    <div>
      {visualHeaderFooter || <Navbar />}
      <Outlet></Outlet>
      {visualHeaderFooter || <Footer />}
    </div>
  );
}

export default Main;

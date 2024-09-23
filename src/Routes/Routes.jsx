import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Contact from "../Pages/ContactUs/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRouts from "./PrivetRouts";
import DashBoard from "../Layout/DashBoard";
import Mycart from "../Pages/Dashboard/Mycart/Mycart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRouts from "./AdminRouts";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/PaymenHistory/Payment";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouts>
        <DashBoard></DashBoard>
      </PrivetRouts>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <Mycart></Mycart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRouts>
            <AdminHome></AdminHome>
          </AdminRouts>
        ),
      },

      {
        path: "allusers",
        element: (
          <AdminRouts>
            <AllUsers></AllUsers>
          </AdminRouts>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRouts>
            <AddItem></AddItem>
          </AdminRouts>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRouts>
            <ManageItem></ManageItem>
          </AdminRouts>
        ),
      },
    ],
  },
]);

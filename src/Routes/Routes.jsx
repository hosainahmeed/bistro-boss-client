import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Contact from "../Pages/ContactUs/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRouts from "./PrivetRouts";
import Secret from "../Pages/Home/Home/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Mycart from "../Pages/Dashboard/Mycart/Mycart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
      {
        path: "secret",
        element: (
          <PrivetRouts>
            <Secret></Secret>
          </PrivetRouts>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivetRouts><DashBoard></DashBoard></PrivetRouts>,
    children:[
        {
            path:"mycart",
            element:<Mycart></Mycart>
        },
        {
            path:"allusers",
            element:<AllUsers></AllUsers>
        },
        {
            path:"reservation",
            element:<Mycart></Mycart>
        },
        {
            path:"history",
            element:<Mycart></Mycart>
        },
        {
            path:"reviews",
            element:<Mycart></Mycart>
        },

    ]
  },
]);

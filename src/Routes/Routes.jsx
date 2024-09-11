import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"menu",
            element:<Menu></Menu>
        },
        {
            path:"order/:category",
            element:<Order></Order>
        }
    ]
  },
]);

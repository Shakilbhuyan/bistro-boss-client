import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../pages/Dashboard/MyCart/Mycart";
import Allusers from "../pages/Dashboard/MyCart/Allusers/Allusers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/Adminhome/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/Userhome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [{
      path: 'userhome',
      element: <UserHome></UserHome>
    },
    {
      path: 'mycart',
      element: <Mycart></Mycart>
    },
    {
      path: 'allusers',
      element: <AdminRoute><Allusers></Allusers></AdminRoute>
    },
    {
      path: 'additem',
      element: <AdminRoute><AddItem></AddItem></AdminRoute>
    },
    {
      path: 'manageitems',
      element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    },
    {
      path: 'payment',
      element: <Payment></Payment>
    },
    {
      path: 'adminhome',
      element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    }
    ]
  }
]);

export default router;
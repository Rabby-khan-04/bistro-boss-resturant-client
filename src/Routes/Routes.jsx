import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Secret from "../Pages/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoutes>
            <AddItems />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoutes>
            <ManageItems />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <AdminRoutes>
            <ManageBookings />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/contact_us/Contact";
import OurMenu from "../pages/our_menu/OurMenu";
import OurShop from "../pages/our_shop/OurShop";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import UserHome from "../pages/dashboard/user/UserHome";
import Reservation from "../pages/dashboard/user/Reservation";
import PaymentHistory from "../pages/dashboard/user/PaymentHistory";
import Booking from "../pages/dashboard/user/Booking";

import Cart from "../pages/dashboard/user/Cart";
import AddReview from "../pages/dashboard/user/AddReview";
import AddItems from "../pages/dashboard/admin/AddItems";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import AllUsers from "../pages/dashboard/admin/AllUsers";
import ManageBooking from "../pages/dashboard/admin/ManageBooking";
import ManageItems from "../pages/dashboard/admin/ManageItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "my-cart",
        element: <Cart />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "my-booking",
        element: <Booking />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-items",
        element: <AddItems />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "manage-booking",
        element: <ManageBooking />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/contact_us/Contact";
import OurMenu from "../pages/our_menu/OurMenu";
import OurShop from "../pages/our_shop/OurShop";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/contact-us',
        element: <Contact/>
      },
      {
        path:'/our-menu',
        element:<OurMenu/>
      },
      {
        path:'/our-shop',
        element:<OurShop/>
      }
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>
  }
]);

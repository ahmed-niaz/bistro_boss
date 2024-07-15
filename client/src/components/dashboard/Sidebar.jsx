import { FaHome, FaShoppingBag } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  MdOutlineMarkEmailUnread,
  MdOutlineRestaurantMenu,
} from "react-icons/md";

import UserNav from "./navigation/UserNav";
import AdminNav from "./navigation/AdminNav";
import useAdmin from "../../hooks/useAdmin";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  return (
    <main className="bg-[#835D23] w-[340px] flex items-start flex-col p-8 font-cinzel">
      <Link to="/">
        <div className="flex flex-col font-cinzel text-white">
          <p className="text-2xl font-extrabold">Bistro Boss</p>
          <small className="text-xl font-bold">Restaurant</small>
        </div>
      </Link>
      <ul className="menu mt-12">
        {isAdmin ? <AdminNav /> : <UserNav />}

        <div className="border-b-4 my-10"></div>
        {/* universal navLink */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <FaHome size={28} />
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <MdOutlineRestaurantMenu size={28} />
            menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <FaShoppingBag size={28} />
            shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <MdOutlineMarkEmailUnread size={28} />
            contact
          </NavLink>
        </li>
      </ul>
    </main>
  );
};

export default Sidebar;

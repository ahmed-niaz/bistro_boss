import {
  FaCalendarAlt,
  FaCartArrowDown,
  FaHome,
  FaShoppingBag,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  MdOutlineMarkEmailUnread,
  MdOutlineRestaurantMenu,
  MdPayment,
} from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { TiBook } from "react-icons/ti";

const Sidebar = () => {
  return (
    <main className="bg-[#835D23] w-[340px] flex items-start flex-col p-8 font-cinzel">
      <Link to="/">
        <div className="flex flex-col font-cinzel text-white">
          <p className="text-2xl font-extrabold">Bistro Boss</p>
          <small className="text-xl font-bold">Restaurant</small>
        </div>
      </Link>
      <ul className="menu mt-12">
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <FaHome size={28} />
            user Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reservation"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <FaCalendarAlt size={28} />
            reservation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/payment-history"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <MdPayment size={28} />
            payment history
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-cart"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <FaCartArrowDown size={28} />
            my cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-review"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <GoCodeReview size={28} />
            add review
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-booking"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-black bg-none text-sm font-bold"
                : "text-sm font-bold text-white"
            }
          >
            <TiBook size={28} />
            my booking
          </NavLink>
        </li>
        <div className="border-b-4 my-10"></div>
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

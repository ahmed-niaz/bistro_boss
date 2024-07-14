import { FaCalendarAlt, FaCartArrowDown, FaHome } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { TiBook } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const UserNav = () => {
    const [cart]= useCart()
    return (
        <>
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
                ? " uppercase text-black bg-none text-sm font-bold "
                : "text-sm font-bold text-white"
            }
          >
            <FaCartArrowDown size={28} />
            
            my cart <span className="font-extrabold  -ml-12  -mt-4">{cart.length}</span>
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
        </>
    );
};

export default UserNav;
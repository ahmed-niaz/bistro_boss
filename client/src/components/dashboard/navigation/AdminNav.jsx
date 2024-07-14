import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { TiBook } from "react-icons/ti";
import { MdManageAccounts } from "react-icons/md";
const AdminNav = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-black bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          <FaHome size={28} />
          admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add-items"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-black bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          <ImSpoonKnife size={28} />
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-items"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-black bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          <MdManageAccounts size={28} />
          manage items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-booking"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-black bg-none text-sm font-bold "
              : "text-sm font-bold text-white"
          }
        >
          <TiBook size={28} />
          manage booking
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-users"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-black bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          <FaUsers size={28} />
          all users
        </NavLink>
      </li>
    </>
  );
};

export default AdminNav;

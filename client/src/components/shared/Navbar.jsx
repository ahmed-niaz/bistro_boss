import { Link, NavLink } from "react-router-dom";

import cartIcon from "../../assets/icon/cart.png";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "lg:text-[#835D23] uppercase bg-none text-sm font-bold"
              : "text-sm   text-white"
          }
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#835D23] bg-none text-sm font-bold"
              : "text-sm  text-white"
          }
        >
          contact us
        </NavLink>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-[#835D23] bg-none text-sm font-bold"
                : "text-sm  text-white"
            }
          >
            dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive
                ? " uppercase text-[#835D23] bg-none text-sm font-bold"
                : "text-sm  text-white"
            }
          >
            dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/our-menu"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#835D23] bg-none text-sm font-bold"
              : "text-sm  text-white"
          }
        >
          our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-shop/salad"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#835D23] bg-none text-sm font-bold"
              : "text-sm text-white"
          }
        >
          our shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#835D23] bg-none"
              : "text-sm  text-white"
          }
        >
          <img className="w-[24px]" src={cartIcon} alt={cartIcon} />
          <div className="font-extrabold  -ml-2 -mt-4">{cart.length}</div>
        </NavLink>
      </li>
    </>
  );
  return (
    <main className=" fixed z-30 w-full bg-[#15151580] ">
      <div className="navbar text-white container mx-auto z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 bg-black text-white p-2 shadow  rounded-box w-52 z-50"
            >
              {links}
            </ul>
          </div>
          <Link>
            <div className="flex flex-col font-cinzel">
              <p className="text-3xl font-extrabold">Bistro Boss</p>
              <small className="text-2xl font-bold tracking-wide">
                Restaurant
              </small>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex z-50">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          ></div>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/8jzLLB4/438036378-984851046398483-5226497363877099275-n.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 bg-transparent rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm   btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? " uppercase text-[#EEFF25] bg-none text-sm font-bold"
                    : "text-sm font-bold text-white"
                }
              >
                login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar;

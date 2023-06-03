import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { FaBook, FaCalendarCheck } from "react-icons/fa";
import { MdShoppingBag, MdOutlineRestaurant } from "react-icons/md";
import { HiEnvelope, HiUserGroup } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import { useCart } from "../Hooks/useCart";
import { useAdmin } from "../Hooks/useAdmin";
import { useAuth } from "../Hooks/useAuth";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { loading } = useAuth();

  // const isAdmin = true;

  console.log("Hittin Dashboard");

  if (isAdminLoading || loading) {
    return (
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-12 bg-[#f6f6f6]">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className=" py-12 px-9 w-80 bg-gold">
            <div className="mb-14">
              <h2 className="text-4xl font-bold font-cinzel text-neutral">
                Bistro Boss
              </h2>
              <p className="text-[18px] font-cinzel font-semibold text-neutral tracking-[0.38em]">
                Restaurant
              </p>
            </div>
            <ul className="text-neutral text-xl font-cinzel font-medium space-y-6">
              {isAdmin?.admin ? (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/admin-home"
                    >
                      <AiFillHome className="text-3xl" />
                      Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/add-item"
                    >
                      <MdOutlineRestaurant className="text-3xl" />
                      Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/manage-items"
                    >
                      <TfiMenuAlt className="text-3xl" />
                      Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/manage-bookings"
                    >
                      <FaBook className="text-3xl" />
                      Manage Bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/all-users"
                    >
                      <HiUserGroup className="text-3xl" />
                      All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/user-home"
                    >
                      <AiFillHome className="text-3xl" />
                      User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/reservation"
                    >
                      <IoCalendar className="text-3xl" />
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/payment-history"
                    >
                      <GiWallet className="text-3xl" />
                      Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/mycart"
                    >
                      <RiShoppingCart2Fill className="text-3xl" />
                      My Cart
                      <p className="badge badge-error">{cart.length}</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/add-review"
                    >
                      <VscFeedback className="text-3xl" />
                      Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        (isActive ? "text-white" : "") +
                        " " +
                        "flex items-center gap-3"
                      }
                      to="/dashboard/my-bookings"
                    >
                      <FaCalendarCheck className="text-3xl" />
                      My Bookings
                    </NavLink>
                  </li>
                </>
              )}

              <li>
                <div className="h-px bg-white"></div>
              </li>
              <li>
                <Link to="/" className="flex items-center gap-3">
                  <AiFillHome className="text-3xl" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="flex items-center gap-3">
                  <AiOutlineMenu className="text-3xl" />
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/shop/Pizza" className="flex items-center gap-3">
                  <MdShoppingBag className="text-3xl" />
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3">
                  <HiEnvelope className="text-3xl" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

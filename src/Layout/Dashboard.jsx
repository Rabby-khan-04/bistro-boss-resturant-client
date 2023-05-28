import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { FaCalendarCheck } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { HiEnvelope } from "react-icons/hi2";

const Dashboard = () => {
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
                  to="/dashboard/user-home"
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
                  to="/dashboard/user-home"
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
                  to="/dashboard/my-booking"
                >
                  <FaCalendarCheck className="text-3xl" />
                  My Booking
                </NavLink>
              </li>

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

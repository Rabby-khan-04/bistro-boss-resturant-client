import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../../../Hooks/useCart";
import { useAuth } from "../../../Hooks/useAuth";
import { useAdmin } from "../../../Hooks/useAdmin";

const Navbar = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [scrollY, setScrollY] = useState(0);
  const { user, logOutUser } = useAuth();
  const [cart, refetch, isLoading] = useCart();
  console.log("loading", isLoading);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link
          to={isAdmin?.admin ? "/dashboard/admin-home" : "/dashboard/user-home"}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/Pizza">Our Shop</Link>
      </li>
      <li>
        <Link to="secret">Secret</Link>
      </li>
      <li className="mr-4">
        <Link to="/dashboard/mycart" className="py-0 relative">
          <GiShoppingCart className="text-4xl" />
          <div className="h-7 w-7 flex items-center justify-center rounded-full bg-golden absolute bottom-0 right-0 p-0">
            <p className="text-sm">{cart.length || 0}</p>
          </div>
        </Link>
      </li>
      {user ? (
        <li>
          <button
            onClick={handleLogout}
            className="btn btn-secondary text-black"
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const headerScrollStyle = {
    backgroundColor: "#ffffff",
    color: "black",
    boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.15)",
  };
  const headerFixedStyle = {
    backgroundColor: "#0000004D",
    color: "white",
  };

  return (
    <header
      className="navbar fixed w-full z-50"
      style={scrollY > 76 ? headerScrollStyle : headerFixedStyle}
    >
      <div className="navbar-start">
        <Link className="font-cinzel font-bold">
          <span className="text-3xl block">Bistro Boss</span>
          <span className="tracking-wider block">Restaurant</span>
        </Link>
      </div>
      <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-inter">{navItem}</ul>
        </div>
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-inter"
          >
            {navItem}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

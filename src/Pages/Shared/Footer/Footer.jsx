import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 text-white">
        <div className="bg-darkGray py-24 pr-40 flex flex-col items-end">
          <div className="text-center max-w-[345px]">
            <h2 className="text-3xl uppercase mb-6">Contact Us</h2>
            <div className="text-xl">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-darkBlue py-24 pl-40">
          <div className="text-center max-w-[345px]">
            <h2 className="text-3xl uppercase mb-6">Follow Us</h2>
            <div className="text-xl space-y-8">
              <p>Join us on social media</p>
              <div className="text-4xl flex justify-center items-center gap-8">
                <Link to="/">
                  <FaFacebookF />
                </Link>
                <Link to="/">
                  <FaInstagram />
                </Link>
                <Link to="/">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral py-4 text-center text-white">
        <p className="text-xl">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

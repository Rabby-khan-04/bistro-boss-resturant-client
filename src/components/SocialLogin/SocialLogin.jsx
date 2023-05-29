import React from "react";
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const handleGoogleSignin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: loggedInUser.displayName,
            email: loggedInUser.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-inter font-medium text-[#444] mb-4">
        Or Sign in With
      </h2>
      <div className="space-x-14">
        <button className="p-4 border border-neutral rounded-full hover:bg-neutral hover:text-white transition-all duration-300">
          <FaFacebookF className="text-2xl" />
        </button>
        <button
          onClick={handleGoogleSignin}
          className="p-4 border border-neutral rounded-full hover:bg-neutral hover:text-white transition-all duration-300"
        >
          <FaGoogle className="text-2xl" />
        </button>
        <button className="p-4 border border-neutral rounded-full hover:bg-neutral hover:text-white transition-all duration-300">
          <FaGithub className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

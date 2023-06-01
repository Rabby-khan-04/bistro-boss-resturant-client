import React from "react";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useAuth } from "../../Hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        form.reset();
        const loggedUser = result.user;
        console.log(loggedUser);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name, email: email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <section className="bg-loginBg py-28">
        <div className="container">
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <h2 className="text-neutral text-5xl font-bold font-inter text-center">
                Sign Up
              </h2>
              <form onSubmit={handleSignup} className="font-inter space-y-7">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                  />
                </div>

                <input
                  type="submit"
                  value={"Sign Up"}
                  className="btn bg-gold border-gold btn-block text-xl text-white font-bold capitalize"
                />
              </form>
              <div className="text-center font-inter mt-8">
                <Link
                  to="/login"
                  className="text-center text-gold text-xl font-semibold"
                >
                  Already registered? Go to log in
                </Link>
              </div>
              <SocialLogin />
            </div>
            <div className="col-span-3 text-right">
              <img src={loginImg} className="inline-block ml-auto" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

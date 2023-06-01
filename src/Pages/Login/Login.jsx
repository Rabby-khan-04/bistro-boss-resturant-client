import React from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication2.png";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useAuth } from "../../Hooks/useAuth";

const Login = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const { signIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        Swal.fire({
          title: "Successfully login!!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidateCaptch = (e) => {
    const user_captcha_value = e.target.value;
    if (user_captcha_value.length === 6) {
      if (validateCaptcha(user_captcha_value) == true) {
        setDisabledBtn(false);
      } else {
        setDisabledBtn(true);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <section className="bg-loginBg py-28 h-screen">
        <div className="container">
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <img src={loginImg} alt="" />
            </div>
            <div className="col-span-2">
              <h2 className="text-neutral text-5xl font-bold font-inter text-center">
                Login
              </h2>
              <form onSubmit={handleSubmit} className="font-inter space-y-7">
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

                <div>
                  <LoadCanvasTemplate />
                  <div className="form-control flex flex-row">
                    <input
                      type="text"
                      onChange={handleValidateCaptch}
                      name="captch"
                      placeholder="Type the captch"
                      className="input input-bordered flex-grow rounded-r-none"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  disabled={disabledBtn}
                  value={"Sign In"}
                  className="btn bg-gold border-gold btn-block text-xl text-white font-bold capitalize"
                />
              </form>
              <div className="text-center font-inter mt-8">
                <Link
                  to="/signup"
                  className="text-center text-gold text-xl font-semibold"
                >
                  New here? Create a New Account
                </Link>
              </div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

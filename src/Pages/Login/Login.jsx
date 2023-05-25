import React from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication2.png";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const captchRef = useRef(null);
  const [disabledBtn, setDisabledBtn] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidateCaptch = () => {
    const user_captcha_value = captchRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  return (
    <section className="bg-loginBg py-28">
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
                    ref={captchRef}
                    type="text"
                    name="captch"
                    placeholder="Type the captch"
                    className="input input-bordered flex-grow rounded-r-none"
                  />
                  <button
                    onClick={handleValidateCaptch}
                    className="btn btn-accent rounded-l-none"
                  >
                    Validet
                  </button>
                </div>
              </div>
              <input
                type="submit"
                disabled={disabledBtn}
                value={"Sign In"}
                className="btn bg-btnBg border-btnBg btn-block text-xl text-white font-bold capitalize"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

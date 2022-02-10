import "./log.css";
import image from "../Images/authentication.svg";
import { useEffect, useState } from "react";
import Signup from "../SignUpForm/SingUp";

const LogForm = () => {
  const [openModel, setCloseModle] = useState(false);
  const [yourEmail, setYourEmail] = useState("");
  const [yourPassword, setYourPassword] = useState("");

  function addfocus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remfocus() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }
  let hendleFocus = () => {
    let inputs = document.querySelectorAll(".form__input");
    inputs.forEach((input) => {
      input.addEventListener("focus", addfocus);
      input.addEventListener("blur", remfocus);
    });
  };

  let handleLogin = (e) => {
    e.preventDefault();
    let loginData = {
      yourEmail,
      yourPassword,
    };
    console.log(loginData);
    setYourEmail("");
    setYourPassword("");
  };

  return (
    <>
      <div className="l-form" onClick={hendleFocus}>
        <div className="shape1"></div>
        <div className="shape2"></div>

        <div className="form">
          <img src={image} alt="" className="form__img" />
          <form className="form__content" onSubmit={handleLogin}>
            <h1 className="form__title">Welcome</h1>

            <div className="form__div form__div-one">
              <div className="form__icon">
                <i className="bx bx-user-circle"></i>
              </div>

              <div className="form__div-input">
                <label className="form__label">Username</label>
                <input
                  type="text"
                  className="form__input"
                  // placeholder="Username"
                  value={yourEmail}
                  onChange={(e) => setYourEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form__div">
              <div className="form__icon">
                <i className="bx bx-lock"></i>
              </div>

              <div className="form__div-input">
                <label className="form__label">Password</label>
                <input
                  type="password"
                  className="form__input"
                  // placeholder="Password"
                  value={yourPassword}
                  onChange={(e) => setYourPassword(e.target.value)}
                />
              </div>
            </div>
            <a href="http://www.google.com" className="form__forgot">
              Forgot Password?
            </a>

            <button type="submit" className="form__button">
              Login
            </button>
            <div className="create__account">
              <button
                type="button"
                className="form__create"
                onClick={() => setCloseModle(true)}
              >
                Create New Account
              </button>
            </div>

            <div className="form__social">
              <span className="form__social-text">Our login with</span>

              <a href="http://www.facebook.com" className="form__social-icon">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="http://www.google.com" className="form__social-icon">
                <i className="bx bxl-google"></i>
              </a>
              <a href="http://www.instagram.com" className="form__social-icon">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      {openModel && <Signup closeModel={setCloseModle} />}
    </>
  );
};

export default LogForm;

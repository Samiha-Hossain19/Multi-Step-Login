import React from "react";
import "../Styles/Auth.css";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Auth = ({ isAuth, setIsAuth }) => {
  return (
    <div id="Auth" className={`${isAuth.open ? "show" : ""}`}>
      <a
        href="#!"
        className="close"
        onClick={() => setIsAuth({ ...isAuth, open: false })}
      >
        <i className="far fa-window-close"></i>
      </a>
      <div className="content">
        {isAuth.form === "login" && <Login />}
        {isAuth.form === "register" && <Register />}
      </div>
    </div>
  );
};

export default Auth;

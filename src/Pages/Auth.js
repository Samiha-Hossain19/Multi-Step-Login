import React from "react";
import "../Styles/Auth.css";
import Login from "../Components/Login";

const Auth = () => {
  return (
    <div id="Auth" className="show">
      <a href="#!" className="close">
        <i className="far fa-window-close"></i>
      </a>
      <div className="content">
        <Login />
      </div>
    </div>
  );
};

export default Auth;

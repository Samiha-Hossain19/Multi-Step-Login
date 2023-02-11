import React from "react";
import "../Styles/Home.css";
import IMG from "../images/email.svg";

const Home = () => {
  return (
    <div id="Home">
      <div className="container"></div>

      {/* Image */}
      <div className="img">
        <img src={IMG} alt="IMG" />
      </div>

      {/* Content */}
      <div className="text-btns">
        <p>
          Welcome to my page.I am a Software Engineer Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. <br />
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes.
        </p>
        <div className="btns">
          <a href="#!" className="login-btn">
            Login
          </a>{" "}
          <br />
          <a href="#!" className="register-btn">
            Register
          </a>
        </div>
        <span>Or Login With</span>
        <div className="via-social">
          <a href="#!">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#!">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="#!">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

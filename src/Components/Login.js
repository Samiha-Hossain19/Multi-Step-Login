import React from "react";

const Login = () => {
  return (
    <div className="login">
      <strong>Sign In</strong>
      <form>
        {/*Email */}
        <label>
          Email<span>*</span>
        </label>
        <div className="input-group">
          <i className="fas fa-mail-bulk"></i>
          <input type="email" required />
        </div>

        {/*password */}
        <label>
          Pasword<span>*</span>
        </label>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="Password" required />
        </div>

        {/*Buttons*/}
        <div className="btns">
          <button type="submit">Login</button>
        </div>

        {/*Forgot Password*/}
        <a href="#!" className="forget">
          Forgot Password
        </a>
      </form>

      <div className="intro-text">
        <span>Welcome to My Site</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
          bibendum neque egestas congue. Libero justo laoreet sit amet cursus
          sit amet dictum sit. Fusce id velit ut tortor pretium viverra. Non
          curabitur gravida arcu ac tortor dignissim convallis aenean etc.
        </p>
      </div>
    </div>
  );
};

export default Login;

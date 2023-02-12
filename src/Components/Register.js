import React from "react";

const Register = () => {
  return (
    <div className="register">
      <strong>Sign Up</strong>

      {/*Progress Bar */}
      <div className="progress-bar">
        <ul>
          <div className="progress"> </div>
          {["Name", "Contact", "Birth", "Submit"].map((item, index) => (
            <li key={item} data-title={item}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* Pages */}
      <div className="wrapper">
        {/* basic info */}
        <form>
          {/*Fname */}
          <label>
            First Name<span>*</span>
          </label>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" required />
          </div>

          {/*lname */}
          <label>
            Last Name<span>*</span>
          </label>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" required />
          </div>

          {/*Buttons*/}
          <div className="btns">
            <button type="submit">Next</button>
          </div>
        </form>
        {/* Contact Info */}
        <form>
          {/*Email */}
          <label>
            Email<span>*</span>
          </label>
          <div className="input-group">
            <i className="fas fa-mail-bulk"></i>
            <input type="email" required />
          </div>

          {/*PN */}
          <label>
            Contact Number<span>*</span>
          </label>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="text" required />
          </div>

          {/*Buttons*/}
          <div className="btns">
            <button type="button">Prev</button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>

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
export default Register;

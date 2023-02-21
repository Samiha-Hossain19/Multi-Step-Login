import React, { useState } from "react";

const Register = () => {
  const [currIndex, setCurrIndex] = useState(0);
  function plusIndex(n) {
    setCurrIndex((prev) => prev + n);
  }
  function handleNext(e) {
    e.preventDefault();
    plusIndex(1);
  }
  return (
    <div className="register">
      <strong>Sign Up</strong>

      {/*Progress Bar */}
      <div className="progress-bar">
        <ul>
          <div
            className="progress"
            style={{ width: `calc(100% / 3 * ${currIndex})` }}
          />
          {["Name", "Contact", "Birth", "Submit"].map((item, index) => (
            <li
              key={item}
              data-title={item}
              className={`${currIndex >= index ? "active" : ""}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* Pages */}
      <div className="wrapper" style={{ marginLeft: `${currIndex * -100}%` }}>
        {/* basic info */}
        <form onSubmit={handleNext}>
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
        <form onSubmit={handleNext}>
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
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* DOB */}
        <form onSubmit={handleNext}>
          {/*Date */}
          <label>
            Date<span>*</span>
          </label>
          <div className="input-group">
            <i className="far fa-copy"></i>
            <input type="date" required />
          </div>

          {/*Gender */}
          <label>
            Gender<span>*</span>
          </label>
          <div className="input-group">
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/*Buttons*/}
          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* Submit */}
        <form onSubmit={handleNext}>
          {/*User Name */}
          <label>
            Username<span>*</span>
          </label>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" required />
          </div>

          {/*Password */}
          <label>
            Password<span>*</span>
          </label>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" required />
          </div>

          {/*Buttons*/}
          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
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

import React from "react";
import logo from '../../assets/logo.png';

function Register() {
  return (
<div className="main-content">
        <div className="signupJumbo box animate__animated animate__fadeIn animate__delay-0.5s">
          <button className="back fas fa-arrow-circle-left" value="Go back!" onclick="history.back()">
          </button>
          <div className="container singupContain">
          <img className="signin-logo" src={logo} alt="eye logo" />
          <h1 className="title registerTitle">JOB TRACKR</h1>
            <form className="animate__animated animate__fadeIn animate__delay-2s">
              <input type="text" placeholder="email" id="email" />
              <input type="password" placeholder="password" id="password" />
              <button className="btn btn-default login-btn" id="signUpBtn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

    );
  };
export default Register;
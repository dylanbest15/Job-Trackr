import React from "react";
import logo from '../../assets/logo.png';
import { Spring } from 'react-spring/renderprops'

function Register() {
  return (
    <div className="main-content login-bg">
      <div className="signupJumbo box">
        <div className="container singupContain">
          <img className="register-logo" src={logo} alt="eye logo" />

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 250, duration: 1000 }}
          >
            {props => (
              <div style={props}>
                <h1 className="title registerTitle">JOB TRACKR</h1>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 1000 }}
          >
            {props => (
              <div style={props}>
                <form>
                  <input type="text" placeholder="First Name" id="firstName" />
                  <input type="text" placeholder="Last Name" id="lastName" />
                  <input type="text" placeholder="Email" id="email" />
                  <input type="password" placeholder="Password" id="password" />
                </form>
                <a className="signUpHere" href="/">Sign In Here</a>
              </div>
            )}
          </Spring>

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 750, duration: 1000 }}
          >
            {props => (
              <div style={props}>
                <button className="btn btn-default login-btn" id="signUpBtn">Sign Up</button>

              </div>
            )}
          </Spring>

        </div>
      </div>
    </div>

  );
};
export default Register;
import React from "react";
import logo from '../../assets/logo.png';
import './Login.css';
import { Spring } from 'react-spring/renderprops'

function Login() {
  return (
    <div className="main-content login-bg">
      <div className="signupJumbo box">
        <div className="container singupContain">
          <img className="signin-logo" src={logo} alt="eye logo" />

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
                  <input type="text" placeholder="email" id="email" />
                  <input type="password" placeholder="password" id="password" />
                </form>
                <a className="signUpHere" href="/register">Sign Up Here</a>
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
                <button className="btn btn-default login-btn" id="signUpBtn">Sign In</button>

              </div>
            )}
          </Spring>

        </div>
      </div>
    </div>
  );
};
export default Login;
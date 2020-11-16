import React from "react";
import { Spring } from 'react-spring/renderprops'
import logo from '../../assets/logo.png';

function Register() {
  return (

<div className="main-content">
        <div className="signupJumbo box">
          <div className="container singupContain">
          <img className="signin-logo" src={logo} alt="eye logo" />

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 500 }}
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
            config={{ delay: 1000, duration: 1000 }}
          >
            {props => (
              <div style={props}>
            <form classname="registerForm">
              <input type="text" placeholder="email" id="email" />
              <input type="password" placeholder="password" id="password" />
              </form>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1500, duration: 750 }}
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
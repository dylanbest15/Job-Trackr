import React from "react";
import { Spring } from 'react-spring/renderprops'
import logo from '../../assets/logo.png';


function Login() {
  return (
    <div className="main-content">
      <div className="login-container box">
        <div className="container">
          <img className="signin-logo" src={logo} alt="eye logo" />

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 500 }}
          >
            {props => (
              <div style={props}>
           <h1 className="login-title">JOB TRACKR</h1>
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
                <form>
                  <input type="text" placeholder="email" id="email" />
                  <input type="password" placeholder="password" id="password" />

                  <label htmlFor="remember">Remember me <input type="checkbox" defaultValue="lsRemember" id="rememberMe" /> </label>

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
                <button className="btn btn-default login-btn" type="button" id="signInBtn">Sign in</button>

              </div>
            )}
          </Spring>

        </div>
      </div>
    </div>
  );
};
export default Login;
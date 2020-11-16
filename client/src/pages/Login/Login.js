import React from "react";
import logo from '../../assets/logo.png';
import { FaArrowAltCircleLeft } from 'react-icons/fa';


function Login() {
  return (
      <div className="main-content">
      <div className="login-container box animate__animated animate__fadeIn animate__delay-0.5s">

        <button className="back fas fa-arrow-circle-left" value="Go back!" onclick="history.back()">
        </button>
        
        <div className="container">
        <img className="signin-logo" src={logo} alt="eye logo" />
          <h1 className="login-title animate__animated animate__fadeIn animate__delay-0.5s">JOB TRACKR</h1>
          <form className="animate__animated animate__fadeIn animate__delay-.75s">
            <input type="text" placeholder="email" id="email" />
            <input type="password" placeholder="password" id="password" />

            <label htmlFor="remember">Remember me <input type="checkbox" defaultValue="lsRemember" id="rememberMe" /> </label>

            <button className="btn btn-default login-btn" type="button" id="signInBtn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
    );
  };
export default Login;
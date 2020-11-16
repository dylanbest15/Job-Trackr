import React from "react";
import './Home.css';
import { Spring } from 'react-spring/renderprops'
import logo from '../../assets/logo.png';

function Home() {
  return (
    <div className="main-content">
      <div className="login-container box">
        <div className="container">
          <img className="signin-logo" src={logo} alt="eye logo" />
          <a></a>

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 250, duration: 1000 }}
          >
            {props => (
              <div style={props}>
                <h1 className="title">JOB TRACKR</h1>
                <h2 className="subHeading">Find your perfect job today</h2>
              </div>
            )}
          </Spring>

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 800, duration: 750 }}
          >
            {props => (
              <div style={props}>
                <div className="start-btns">
                  <a href="/login"><button className="login-btn btn btn-default start-btn">
                    Sign in
                  </button>
                  </a><a href="/register"><button className="login-btn btn btn-default start-btn">
                    Sign up</button></a>
                </div>
              </div>
            )}
          </Spring>

        </div>
      </div>
    </div>


  );
};
export default Home;

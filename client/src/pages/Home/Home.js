import React from "react";
import './Home.css';
import logo from '../../assets/logo.png';

function Home() {
  return (
<div className="main-content">
        <div className="login-container box">
          <div className="container">
          <img className="signin-logo" src={logo} alt="eye logo" />
          <a></a>
            <h1 className="title">JOB TRACKR</h1>
            <h2 className="subHeading">Find your perfect job today</h2>
            <div className="start-btns">
              <a href="/login"><button className="login-btn btn btn-default start-btn">
                  Sign in
                </button>
              </a><a href="/register"><button className="login-btn btn btn-default start-btn">
                  Sign up</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Home;

import React, { useState, useContext } from "react";
import logo from '../../assets/logo.png';
import { Spring } from 'react-spring/renderprops'
import API from "../../utils/PassportAPI";
import { userContext } from "../../App";


function Register({ history }) {

  // set states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  // event handlers
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // check for valid fields
    if (!email || !password) {
      return;
    }
    // run api sign up
    API.signupUser({
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName
    }).then((res) => {
      setUser(res.data)
      history.push("/dashboard")
    })
      .catch(err => console.log(err));
  }

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
                <form onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="first name" id="firstName" onChange={handleFirstNameChange}/>
                  <input type="text" placeholder="last name" id="lastName" onChange={handleLastNameChange}/>
                  <input type="text" placeholder="email" id="email" onChange={handleEmailChange} />
                  <input type="password" placeholder="password" id="password" onChange={handlePasswordChange} />
                  <a className="signUpHere" href="/">Sign In Here</a>
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
                </form>

              </div>
            )}
          </Spring>

        </div>
      </div>
    </div>

  );
};
export default Register;
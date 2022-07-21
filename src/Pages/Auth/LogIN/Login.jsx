import React from "react";
import "./LogIn.css";
import {Link} from "react-router-dom";

const  Login=()=> {
  return (
    <div className="upper">
      <div className="login-main-container">
        <div className="left-side-section">
          <img className="login-pic" src="./images/loginpic.svg" alt="" />
          <Link to="/SignUp">
            <button className="create-account-btn">Create New Account</button>
          </Link>
        </div>
        <div className="right-side-section">
          <h1>Log-In</h1>
          <input className="log-in-input" type="text" placeholder="Enter Your Name" />
          <input className="log-in-input" type="text" placeholder="Enter Your E-mail" />
          <input className="log-in-input" type="text" placeholder="Enter Your password" />
          <button className="login-page-btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export { Login };
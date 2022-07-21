import {Link} from "react-router-dom";
import "./SIgnUp.css"
import React from 'react'

const SignUp=()=> {

    return (
        <div className="upper">
          <div className="login-main-container">
            <div className="left-side-section">
              <img className="login-pic" src="./images/loginpic.svg" alt="" />
              <Link to="/Login">
                <button className="create-account-btn">Allready Have Account</button>
              </Link>
            </div>
            <div className="right-side-section">
              <h1>Sign-Up</h1>
              <input className="log-in-input" type="text" placeholder="Enter Your Name" />
              <input className="log-in-input" type="text" placeholder="Enter Your E-mail" />
              <input className="log-in-input" type="text" placeholder="Enter Your password" />
              <input className="log-in-input" type="text" placeholder="Confirm Your password" />
              <button className="login-page-btn">SUBMIT</button>
            </div>
          </div>
        </div>
      );
    }
    

export {SignUp}
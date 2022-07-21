import React from 'react'
import { Link } from 'react-router-dom'
import "./Landing-Page.css"

function LandingPage() {
  return (
      <div className="home-main-container">
        <div className="home-left-side-container">           
            <div className="home-left-side-subcontainer">
                <h1 className='landing-page-heading'>My<span className='span-text-one'>Website</span></h1>
                <div className="paragraph">
                    <h2>Meet Your modern <span className='span-text-two'>Note Taking App</span></h2>
                    <p className='landing-page-paragraph'>Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
                </div>
                <div>
                    <Link to="/Notes">
                    <button className="guest-mode-btn">Create Notes as Guest</button>
                    </Link>
                </div>
            </div>
        </div> 
        <div className="home-right-side-container">
            <img className='home-img' src="./images/notes-pic.svg" alt="" />
        </div>       

      </div>
      
      
  )
}

export {LandingPage}
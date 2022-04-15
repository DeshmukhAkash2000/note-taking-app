import React from 'react';
import "./nav.css";

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <div className="heading">
            <img className='nav-img' src="https://w7.pngwing.com/pngs/71/360/png-transparent-quill-fountain-pen-drawing-writing-feather-animals-hand-bird.png" alt="" />
            <h1 className='my-notes-text'>My_Notes</h1>       
        </div>
        <div className='nav-auth-section'>
          <button className='nav-login-btn'>LogIn</button>
          <i class="fa fa-user"></i>
        </div>
    </header>
    </div>
  )
}

export {Navigation}

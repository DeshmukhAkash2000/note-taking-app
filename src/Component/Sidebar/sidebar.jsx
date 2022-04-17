import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
       <div className="main-side-container">
            <div className='sidebar-icon-btn'>
              <i class="fa fa-home side-icon"></i>
              <button className="sidebar-btn">Home</button>
            </div>

            <div className='sidebar-icon-btn'>
              <i class="fa fa-archive side-icon"></i>
              <button className="sidebar-btn">Archieve</button>
            </div>

            <div className='sidebar-icon-btn'>
              <i class="fa fa-trash-o side-icon"></i>
              <button className="sidebar-btn">Trash</button>
            </div>

            <div className='sidebar-icon-btn'>
              <i class="fa fa-tags side-icon"></i>
              <button className="sidebar-btn">Profile</button>
            </div>
        </div>
    </div>
  )
}

export {Sidebar};

import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="main-side-container">
       <Link to="/">
        <div className="sidebar-icon-btn">
            <i class="fa fa-home side-icon"></i>
            <button className="sidebar-btn">Home</button>
          </div>
       </Link>

       <Link to="/Notes">
          <div className="sidebar-icon-btn">
            <i class="fa fa-plus"></i>
            <button className="sidebar-btn">Add Note</button>
          </div>
        </Link>

        <Link to="/archieve">
          <div className="sidebar-icon-btn">
            <i class="fa fa-archive side-icon"></i>
            <button className="sidebar-btn">Archieve</button>
          </div>
        </Link>

       <Link to="/trash">
        <div className="sidebar-icon-btn">
            <i class="fa fa-trash-o side-icon"></i>
            <button className="sidebar-btn">Trash</button>
          </div>
       </Link>
      </aside>
    </div>
  );
};

export { Sidebar };

import React from "react";
import { NavLink } from "react-router-dom";
const Navigationmenu = () => {
  return (
    <>
      <div className="navigationMenu">
        <NavLink to="/overview" className="itemMenu">
          <i className="fa-regular fa-circle-question"></i>
          <span>Overview</span>
        </NavLink>

        <NavLink to="/calender" className="itemMenu">
          <i className="fa-regular fa-calendar-days"></i> <span>Calender</span>
        </NavLink>

        <NavLink to="/" activeclassname="active" className="itemMenu">
          <i className="fa-regular fa-user"></i>
          <span>Patient List</span>
        </NavLink>
        <NavLink to="/messages" className="itemMenu">
          <i className="fa-solid fa-message"></i>
          <span>Messages</span>
        </NavLink>
        <NavLink to="/payment" className="itemMenu">
          <i className="fa-solid fa-sack-dollar"></i>
          <span>Payment information</span>
        </NavLink>
        <NavLink to="/settings" className="itemMenu">
          <i className="fa-solid fa-sliders"></i>
          <span>Settings</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navigationmenu;

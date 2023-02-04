import React from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

function Sidebar() {
  return (
    <>
      <div class="sidenav">
        <a href="#">
          <p>Dashboard</p>
        </a>

        <NavLink to="/History_dis">Patient's Medical History</NavLink>
        <NavLink to= "/Prescription" className="active">
          Digital Prescription Form
        </NavLink>
        <NavLink to="/Reminder_display">Set Appointments</NavLink>
      </div>
    </>
  );
}

export default Sidebar;

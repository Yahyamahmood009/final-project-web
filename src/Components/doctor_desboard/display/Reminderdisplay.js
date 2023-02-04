import React from "react";
import { Link } from "react-router-dom";
import App from "../component/doctor_nav";
import Reminder from "../component/reminder";
import Sidebar from "../component/sideBar";

function Reminderdisplay() {
  return (
    <>
      <Link to={"/Reminder_display"}></Link>
      <App />
      <Sidebar />
      <Reminder />
    </>
  );
}

export default Reminderdisplay;

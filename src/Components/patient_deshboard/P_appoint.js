import React from "react";
import { Link } from "react-router-dom";
import Appointment from "./appoint";
import Pat_nav from "./pat_nav";
import Pat_Sidebar from "./p_sidebar";

function P_appoint() {
  return (
    <>
      <Link to="/patient_Appointment"></Link>
      <Pat_nav />
      <Pat_Sidebar />
      <Appointment />
    </>
  );
}

export default P_appoint;

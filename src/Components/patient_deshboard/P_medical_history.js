import React from "react";
import Med_History from "./histroy";
import Pat_nav from "./pat_nav";
import Pat_Sidebar from "./p_sidebar";
import { Link } from "react-router-dom";
function P_medical_history() {
  return (
    <>
      <Link to="/patient_history"></Link>
      <Pat_nav />
      <Pat_Sidebar />
      <Med_History />
    </>
  );
}

export default P_medical_history;

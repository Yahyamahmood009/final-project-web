import React from "react";
import { Link } from "react-router-dom";
import History from "../component/med_history";
import Sidebar from "../component/sideBar";
import App from "../component/doctor_nav";
function History_display() {
  return (
    <>
      <Link to="/History_dis"></Link>
      <App />
      <Sidebar />
      <History />
    </>
  );
}

export default History_display;

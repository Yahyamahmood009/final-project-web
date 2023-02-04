import React from "react";
import App from "../component/doctor_nav";
import Sidebar from "../component/sideBar";
import Welcome_main from "../component/welcome_main";
import History from "../component/med_history";
import Digital_form from "../component/dig_pres_form";
import { Link, NavLink, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <>
      <Link to={"/Doctor_dashboard"}></Link>
      <App />
      <Sidebar />
      <Welcome_main />
    </>
  );
}

export default Main;

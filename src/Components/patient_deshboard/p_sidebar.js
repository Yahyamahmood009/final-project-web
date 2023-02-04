import { NavLink } from "react-router-dom";
import "./p_sidebar.css";

function Pat_Sidebar() {
  return (
    <div class="sidenav">
      <a href="#">
        <p>Dashboard</p>
      </a>

      <NavLink to={"/patient_history"}>Medical History</NavLink>
      <NavLink to={"/patient_Appointment"}>Appointments</NavLink>
    </div>
  );
}

export default Pat_Sidebar;

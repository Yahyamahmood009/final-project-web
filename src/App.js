import Home from "./Components/home/Home";
import Choice1 from "./Components/Start-login/login_for";
import Choice2 from "./Components/Start_sign-up/signup_for";
import P_Signup from "./Components/Patient_Sign_up/psignup";
import D_Signup from "./Components/Doctor_sign_up/d_signup";
import D_Login from "./Components/All_login/D_Login";
import P_Login from "./Components/All_login/p_Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/doctor_desboard/display/Deshboard";
import History_display from "./Components/doctor_desboard/display/History";
import PrescriptionDisplay from "./Components/doctor_desboard/display/PrescriptionDisplay";
import Reminderdisplay from "./Components/doctor_desboard/display/Reminderdisplay";
import Patient_Dashboard from "./Components/patient_deshboard/patient_dashboard";
import P_medical_history from "./Components/patient_deshboard/P_medical_history";
import P_appoint from "./Components/patient_deshboard/P_appoint";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Sign-up" element={<Choice2 />} />
      <Route path="/Sign-in" element={<Choice1 />} />
      <Route path="/Patient-Sign-up" element={<P_Signup />} />
      <Route path="/Doctor-Sign-up" element={<D_Signup />} />
      <Route path="/Doctor-login" element={<D_Login />} />
      <Route path="/Patient-login" element={<P_Login />} />
      <Route path="/Main-deshboard" element={<Main />} />
      <Route path="/History_dis" element={ <History_display/>} />
      <Route path="/Prescription" element={ <PrescriptionDisplay/>} />
      <Route path="/Reminder_display" element={ <Reminderdisplay/>} />
      <Route path="/Patient_Deshboard" element={ <Patient_Dashboard/>} />
      <Route path="/patient_history" element={ <P_medical_history/>} />
      <Route path="/patient_Appointment" element={ <P_appoint/>} />
    </Routes>
  );
}

export default App;

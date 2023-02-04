import React from 'react'
import { Link } from 'react-router-dom'
import Digital_form from '../component/dig_pres_form'
import App from '../component/doctor_nav'
import Sidebar from '../component/sideBar'

function PrescriptionDisplay() {
  return (
    <>
      <Link to={"/Prescription"}></Link>
      <App />
      <Sidebar />
      <Digital_form/>
    </>
  )
}

export default PrescriptionDisplay
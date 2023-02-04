import Slider from "../slider/slider";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      {/* """"""""""""""""""""""""""""""""""""
| CONTAINER # 1 for top section|                        
""""""""""""""""""""""""""""""""""""  */}

      <div className="navbar1">
        <Navbar />
      </div>

      <div className="container">
        <div className="comp2">
          <div className="comp2-div1">
            <p>
              <b>Bring the future of your health care</b>
            </p>
          </div>
          <div className="comp2-div2">
            <p>
              A system that keeps a record of a patient's history, or a reminder
              call for the next appointments and a diigital prescription form
              for doctors that easily defines medications for patients
            </p>
          </div>
          <div className="comp2-div3"></div>
          <Link to="/Sign-up">
            <button className="btnn">Create an Account</button>
          </Link>
        </div>

        <div className="comp">
          <video src="video\backgroud.mp4" autoPlay loop muted />
        </div>
      </div>

      {/* """"""""""""""""""""""""""""""""""""
| CONTAINER # 2 for background|                        
""""""""""""""""""""""""""""""""""""  */}

      <div className="container2">
        <div className="con2-div1">
          <h1>Help you</h1>
          <p>
            When you’re signed in, all of the Medsist services you use work
            together seamlessly to offer you ease with in the medical side of
            your life by bringing the ease for the doctor and also brind
            easiness in expalining the history to the doctor.
          </p>
        </div>
        <div className="con2-div2">
          <h1>Built for you</h1>
          <p>
            No matter which device you’re using, your account gives you a
            consistent experience you can manage and access at any time.
          </p>
        </div>
        <div className="con2-div3">
          <h1>Data is protected</h1>
          <p>
            Your Medisist account is protected by security that automatically
            helps detect and block threats before they ever reach you
          </p>
        </div>
      </div>
      {/* """"""""""""""""""""""""""""""""""""
          | CONTAINER # 3  for image|                        
        """"""""""""""""""""""""""""""""""""  */}
      <div className="container3">
        <div className="con3-div1">
          <img src="images\1.jpg" className="image" />
        </div>
        <div className="con3-div2">
          <div className="con3-div2-row1">
            <h1>Why Us</h1>
          </div>
          <div className="con3-div2-row2">
            <h2>
              Wanted a system that easily defines medications for patients?
            </h2>
          </div>
          <div className="con3-div2-row3">
            <p>
              Most of the patients due to workload misses appointments with the
              doctor or face issues of the doctor’s bad handwriting on the
              prescription form and while appointments carrying bundles of files
              or paper including prescriptions and medical reports so if the
              patient loses some important documents or forgets to carry these
              documents it can become a big problem. So, in our web-based
              application, we are providing certain services to doctors and
              patients like digital prescription forms, maintaining a patient
              record that can be viewed by both the doctor and the patient
            </p>
          </div>
        </div>
      </div>

      {/* """"""""""""""""""""""""""""""""""""
          | CONTAINER # 4 for cards|                        
        """"""""""""""""""""""""""""""""""""  */}
      <div className="container4">
        <div className="c4-div1">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>Services</h2>
                <h1>Digital Prescriptions Form</h1>
                <p>
                  <img src="images\Picture1.jpg" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c4-div2">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>Services</h2>
                <h1>Maintain Medical Record</h1>
                <img src="images\Picture2.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="c4-div3">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>Services</h2>
                <h1>Reminder Notification</h1>
                <img src="images\Picture3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container5">
        <div className="con5-div1">
          <Slider />
        </div>
      </div>
      <div className="container6">
        <div className="con6-col">
          <h1> Your Medisist starts here</h1>
          <p>Enter into the world of ease with Medisist</p>
           <Link to="/Sign-up"><button className="con6-btn">
           Get Started
          </button>
          </Link>
        </div>
      </div>
      <div className="container7">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

import "./signup_for.css";
import { Link } from "react-router-dom";
import Main2 from "./main2"

function Choice2() {
  return (
    <div className="Main2">
      <div className="main2-div1">
      <Main2/>
      </div>
      <div className="main2-div2">
        <div className="doctor">
          <img src="images/doc.png" className="doc_logo"></img>
          <br></br>
          <button className="btn">
            <Link to="/Doctor-Sign-up">Doctor</Link>
          </button>
        </div>

        <div className="patient">
          <img src="images/pat.jpg" className="pat_logo"></img>
          <br></br>
          <button className="btn">
            <Link to="/Patient-Sign-up">Patient</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Choice2;

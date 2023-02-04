import "./login_for.css";
import Main1 from "./main1";
import { Link } from "react-router-dom";
function Choice1() {
  return (
    <div className="Main">
      <div className="login-main-div1">
        <Main1 />
      </div>
      <div className="login-main-div2">
        <div className="doctor">
          <img src="images/doc.png" className="doc_logo"></img>
          <br></br>
          <button className="btn">
            <Link to="/Doctor-login">Doctor</Link>
          </button>
        </div>

        <div className="patient">
          <img src="images/pat.jpg" className="pat_logo"></img>
          <br></br>
          <button className="btn">
            <Link to="/Patient-login">Patient</Link>
          </button>
        </div>

        <div className="admin">
          <img src="images\admin.png" className="ad_logo" />
          <br></br>
          <button className="btn">Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Choice1;

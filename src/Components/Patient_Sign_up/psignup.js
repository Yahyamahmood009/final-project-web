import "./p_signup.css";
import { Link } from "react-router-dom";
function P_Signup() {
  return (
    <div className="main-p-signup">
      <div className="main-p-logo">
        <img className="main-p-logo1" src="logo.jpg" alt="logo" />
      </div>

      <div className="title">Medisist</div>

      <div className="login">Create your Medisist Account</div>

      <div className="form1">
        <div className="form1a">
          <label for="fname">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            id="fname"
            name="fname"
          ></input>
        </div>

        <div className="form1b">
          <label for="lname">Last Name*</label>
          <input
            type="text"
            id="lname"
            placeholder="Enter Last Name"
            name="lname"
          ></input>
        </div>
      </div>

      <div className="form1">
        <label for="lname">Email*</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          name="email"
        ></input>
      </div>

      <div className="form1">
        <label for="fname">Password*</label>
        <input
          type="text"
          placeholder="Enter Password"
          id="pass"
          name="pass"
        ></input>
      </div>

      <div className="form1">
        <label for="lname">Date of Birth*</label>
        <input type="date" id="dob" name="dob"></input>
      </div>

      <div className="form1">
        <div className="form1a">
          <label for="fname">Mobile Number*</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            id="m_num"
            name="m_num"
          ></input>
        </div>

        <div className="form1b">
          <label for="lname">CNIC*</label>
          <input
            type="text"
            id="cnic"
            placeholder="Enter CNIC Number"
            name="cnic"
          ></input>
        </div>
      </div>

      <div className="form1">
        <label for="lname">Address*</label>
        <input
          type="text"
          id="add"
          placeholder="Enter Complete Address"
          name="add"
        ></input>
      </div>

      <div className="form1">
        <label for="lname">Gender*</label>
      </div>
      <div className="form1">
        <div className="form1a">
          <input type="radio" id="r1" name="r1"></input> Male
        </div>

        <div className="form1b">
          <input type="radio" id="r1" name="r1"></input> Female
        </div>
      </div>

      <div className="btnnn">
        <Link to="/Patient_Deshboard">
          <button className="btnn1">Sign Up</button>
        </Link>
        <Link to="/Patient_Deshboard">
          <button className="btnn2">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default P_Signup;

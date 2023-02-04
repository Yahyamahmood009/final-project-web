import "./d_login.css";
import { Link } from "react-router-dom";
function P_Login() {
  return (
    <div className="main-login">
      <div className="logo-login">
        <img className="logo1-login" src="logo.jpg" />
      </div>

      <div className="title">Medisist</div>

      <div className="login">Sign In</div>

      <div className="form">
        <label for="fname">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          id="fname"
          name="fname"
        ></input>

        <label for="lname">Password</label>
        <input
          type="text"
          id="lname"
          placeholder="Enter Password"
          name="lname"
        ></input>
      </div>

      <div className="buton">
        <Link to="/Patient_Deshboard">
          <button className="buton1">Sign In</button>
        </Link>
        <Link to="/Sign-up">
          <button className="buton2">Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default P_Login;

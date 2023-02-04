import './doctor_nav.css';

function App() {
  return (
    <nav className="navbar">
      <img className="logo" src="logo.JPG"/>
      {/* <button className="btn1">Create an Account</button>
      <button className="btn2">Sign In</button> */}

      <div class="dropdown">
      <button class="dropbtn">Dr Nauman Mirza</button>
      <div class="dropdown-content">
        <a href="#">Setting</a>
        <a href="#">Log Out</a>
      </div>
      </div>  
    </nav>
  );
}

export default App;

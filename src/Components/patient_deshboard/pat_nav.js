import './pat_nav.css';

function Pat_nav() {
  return (
    <nav className="navbar">
      <img className="logo" src="logo.JPG"/>
      {/* <button className="btn1">Create an Account</button>
      <button className="btn2">Sign In</button> */}

      <div class="dropdown">
      <button class="dropbtn">Yahya Mahmood</button>
      <div class="dropdown-content">
        <a href="#">Setting</a>
        <a href="#">Log Out</a>
      </div>
      </div>  
    </nav>
  );
}

export default Pat_nav;

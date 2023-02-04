import "./navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const linkStyle  = styled(Link)`
//   textDecoration: "none";
//   &:focus, &:hover, &:visited, &:link, &:active {
//     text-decoration: none;
// }
// `;

const navbar = () => {
  return (
    <nav className="navbar">
      <img className="logooo" src="logo.JPG" />
      <Link to="/Sign-up">
        <button className="btn1">Create an Account</button>
      </Link>
      <Link to="/Sign-in">
        <button className="btn2">Sign In</button>
      </Link>
    </nav>
  );
};

export default navbar;

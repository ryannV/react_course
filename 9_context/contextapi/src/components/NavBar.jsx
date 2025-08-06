import styles from "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  );
};

export default NavBar;
